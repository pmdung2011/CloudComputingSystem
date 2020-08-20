
var data = [{
"name":"create_dir_diamond_0_local" , "jobS":14 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":14 , "cD":5.0 , "gS":'' , "gD":'' , "eS":19 , "eD":0.0 , "kS":14 , "kD":0.08 , "postS":19 , "postD":5.0 , "state":3 , "transformation": "pegasus::dirmanager"  , "color": "#8dd3c7"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"stage_in_local_local_0" , "jobS":30 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":30 , "cD":5.0 , "gS":'' , "gD":'' , "eS":30 , "eD":5.0 , "kS":30 , "kD":0.133 , "postS":35 , "postD":6.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"stage_in_local_local_1" , "jobS":30 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":30 , "cD":6.0 , "gS":'' , "gD":'' , "eS":35 , "eD":1.0 , "kS":31 , "kD":0.205 , "postS":36 , "postD":5.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"stage_in_local_local_2" , "jobS":30 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":30 , "cD":6.0 , "gS":'' , "gD":'' , "eS":35 , "eD":1.0 , "kS":31 , "kD":0.181 , "postS":36 , "postD":5.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"stage_in_local_local_3" , "jobS":30 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":30 , "cD":5.0 , "gS":'' , "gD":'' , "eS":35 , "eD":0.0 , "kS":31 , "kD":0.193 , "postS":35 , "postD":6.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"preprocess_ID0000001" , "jobS":47 , "jobD":15.0 , "preS":'' , "preD":'' , "cS":47 , "cD":10.0 , "gS":'' , "gD":'' , "eS":57 , "eD":0.0 , "kS":54 , "kD":0.035 , "postS":57 , "postD":5.0 , "state":3 , "transformation": "diamond::preprocess:4.0"  , "color": "#bebada"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"findrange2_ID0000002" , "jobS":68 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":68 , "cD":5.0 , "gS":'' , "gD":'' , "eS":68 , "eD":5.0 , "kS":68 , "kD":0.01 , "postS":73 , "postD":5.0 , "state":3 , "transformation": "diamond::findrange2:4.0"  , "color": "#80b1d3"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"findrange3_ID0000003" , "jobS":68 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":68 , "cD":5.0 , "gS":'' , "gD":'' , "eS":73 , "eD":0.0 , "kS":69 , "kD":0.01 , "postS":73 , "postD":5.0 , "state":3 , "transformation": "diamond::findrange3:4.0"  , "color": "#b3de69"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"stage_out_remote_local_0_0" , "jobS":68 , "jobD":17.0 , "preS":'' , "preD":'' , "cS":68 , "cD":10.0 , "gS":'' , "gD":'' , "eS":73 , "eD":5.0 , "kS":73 , "kD":0.18 , "postS":78 , "postD":7.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"stage_out_remote_local_1_0" , "jobS":85 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":85 , "cD":6.0 , "gS":'' , "gD":'' , "eS":85 , "eD":6.0 , "kS":85 , "kD":0.156 , "postS":91 , "postD":5.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"analyze_ID0000004" , "jobS":85 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":85 , "cD":6.0 , "gS":'' , "gD":'' , "eS":91 , "eD":0.0 , "kS":85 , "kD":0.011 , "postS":91 , "postD":5.0 , "state":3 , "transformation": "diamond::analyze:4.0"  , "color": "#fccde5"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"stage_out_remote_local_1_1" , "jobS":85 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":85 , "cD":6.0 , "gS":'' , "gD":'' , "eS":91 , "eD":0.0 , "kS":85 , "kD":0.159 , "postS":91 , "postD":5.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"clean_up_stage_out_remote_local_0_0" , "jobS":91 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":91 , "cD":5.0 , "gS":'' , "gD":'' , "eS":96 , "eD":0.0 , "kS":95 , "kD":0.102 , "postS":96 , "postD":6.0 , "state":3 , "transformation": "pegasus::cleanup"  , "color": "#d9d9d9"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"clean_up_preprocess_ID0000001" , "jobS":91 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":91 , "cD":5.0 , "gS":'' , "gD":'' , "eS":96 , "eD":0.0 , "kS":95 , "kD":0.135 , "postS":96 , "postD":6.0 , "state":3 , "transformation": "pegasus::cleanup"  , "color": "#d9d9d9"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"stage_out_remote_local_2_0" , "jobS":102 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":102 , "cD":5.0 , "gS":'' , "gD":'' , "eS":102 , "eD":5.0 , "kS":102 , "kD":0.13 , "postS":107 , "postD":6.0 , "state":3 , "transformation": "pegasus::transfer"  , "color": "#4daf4a"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"clean_up_stage_out_remote_local_1_1" , "jobS":102 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":102 , "cD":5.0 , "gS":'' , "gD":'' , "eS":107 , "eD":0.0 , "kS":103 , "kD":0.124 , "postS":107 , "postD":6.0 , "state":3 , "transformation": "pegasus::cleanup"  , "color": "#d9d9d9"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"clean_up_findrange3_ID0000003" , "jobS":102 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":102 , "cD":5.0 , "gS":'' , "gD":'' , "eS":107 , "eD":0.0 , "kS":103 , "kD":0.118 , "postS":107 , "postD":6.0 , "state":3 , "transformation": "pegasus::cleanup"  , "color": "#d9d9d9"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"clean_up_findrange2_ID0000002" , "jobS":102 , "jobD":11.0 , "preS":'' , "preD":'' , "cS":102 , "cD":5.0 , "gS":'' , "gD":'' , "eS":107 , "eD":0.0 , "kS":103 , "kD":0.129 , "postS":107 , "postD":6.0 , "state":3 , "transformation": "pegasus::cleanup"  , "color": "#d9d9d9"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"clean_up_stage_out_remote_local_2_0" , "jobS":119 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":119 , "cD":5.0 , "gS":'' , "gD":'' , "eS":124 , "eD":0.0 , "kS":119 , "kD":0.128 , "postS":124 , "postD":5.0 , "state":3 , "transformation": "pegasus::cleanup"  , "color": "#d9d9d9"  , "sub_wf":0 , "sub_wf_name":''},
{
"name":"clean_up_analyze_ID0000004" , "jobS":119 , "jobD":10.0 , "preS":'' , "preD":'' , "cS":119 , "cD":5.0 , "gS":'' , "gD":'' , "eS":124 , "eD":0.0 , "kS":119 , "kD":0.143 , "postS":124 , "postD":5.0 , "state":3 , "transformation": "pegasus::cleanup"  , "color": "#d9d9d9"  , "sub_wf":0 , "sub_wf_name":''},
];