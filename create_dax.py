#!/usr/bin/env python

import sys
import os

# The location of Pegasus is needed for two things:
#  1. to find the Python DAX module
#  2. to find the keg sample binary
if len(sys.argv) != 2:
        print "Usage: %s PEGASUS_HOME" % (sys.argv[0])
        sys.exit(1)
pegasus_home = sys.argv[1]
os.sys.path.insert(0, os.path.join(pegasus_home, "lib/pegasus/python"))

# Pegaus imports
from Pegasus.DAX3 import *

# Create a abstract dag
diamond = ADAG("diamond")

# Add input file to the DAX-level replica catalog
a = File("text.txt")
a.addPFN(PFN("file:///home/pega/demo-test/text.txt", "condorpool"))
diamond.addFile(a)

# Add executables to the DAX-level replica catalog

e_preprocess = Executable(namespace="diamond", name="preprocess", version="4.0", os="linux", arch="x86_64", installed=False)
e_preprocess.addPFN(PFN("file://" + pegasus_home + "/bin/job/job1.py", "condorpool"))
diamond.addExecutable(e_preprocess)

e_findrange2 = Executable(namespace="diamond", name="findrange2", version="4.0", os="linux", arch="x86_64", installed=False)
e_findrange2.addPFN(PFN("file://" + pegasus_home + "/bin/job/job2.py", "condorpool"))
diamond.addExecutable(e_findrange2)

e_findrange3 = Executable(namespace="diamond", name="findrange3", version="4.0", os="linux", arch="x86_64", installed=False)
e_findrange3.addPFN(PFN("file://" + pegasus_home + "/bin/job/job3.py", "condorpool"))
diamond.addExecutable(e_findrange3)

e_analyze = Executable(namespace="diamond", name="analyze", version="4.0", os="linux", arch="x86_64", installed=False)
e_analyze.addPFN(PFN("file://" + pegasus_home + "/bin/job/job4.py", "condorpool"))
diamond.addExecutable(e_analyze)

# Add a preprocess job
preprocess = Job(namespace="diamond", name="preprocess", version="4.0")


#diamond.addFile(b1)
b1 = File("text2.txt")



#diamond.addFile(b2)

b2 = File("text3.txt")
preprocess.addArguments("-a preprocess","-T60","-i",a,"-o",b1,b2)

#b1.addPFN(PFN("file:///home/pega/demo-test/text2.txt", "condorpool"))
#b2.addPFN(PFN("file:///home/pega/demo-test/text3.txt", "condorpool"))
preprocess.uses(a, link=Link.INPUT)
preprocess.uses(b1, link=Link.OUTPUT)
preprocess.uses(b2, link=Link.OUTPUT)
diamond.addJob(preprocess)

# Add left Findrange job
frl = Job(namespace="diamond", name="findrange2", version="4.0")
c1 = File("FinalText1.txt")
frl.addArguments("-a findrange2","-T60","-i",b1,"-o",c1)


#c1.addPFN(PFN("file:///home/pega/demo-test/FinalText1.txt", "condorpool"))
frl.uses(b1, link=Link.INPUT)
frl.uses(c1, link=Link.OUTPUT)
diamond.addJob(frl)

# Add right Findrange job
frr = Job(namespace="diamond", name="findrange3", version="4.0")
c2 = File("FinalText2.txt")
frr.addArguments("-a findrange3","-T60","-i",b2,"-o",c2)
#diamond.addFile(c2)

#c2.addPFN(PFN("file:///home/pega/demo-test/FinalText2.txt", "condorpool"))
frr.uses(b2, link=Link.INPUT)
frr.uses(c2, link=Link.OUTPUT)
diamond.addJob(frr)

# Add Analyze job
analyze = Job(namespace="diamond", name="analyze", version="4.0")
d = File("FinalText.txt")
analyze.addArguments("-a analyze","-T60","-i",c1,c2,"-o",d)
#diamond.addFile(d)

#d.addPFN(PFN("file:///home/pega/demo-test/FinalText.txt", "condorpool"))
analyze.uses(c1, link=Link.INPUT)
analyze.uses(c2, link=Link.INPUT)
analyze.uses(d, link=Link.OUTPUT, register=True)
diamond.addJob(analyze)

# Add control-flow dependencies
diamond.addDependency(Dependency(parent=preprocess, child=frl))
diamond.addDependency(Dependency(parent=preprocess, child=frr))
diamond.addDependency(Dependency(parent=frl, child=analyze))
diamond.addDependency(Dependency(parent=frr, child=analyze))

# Write the DAX to stdout
diamond.writeXML(sys.stdout)



