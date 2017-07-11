import React from 'react';
import {storiesOf} from '@storybook/react';
import { Alert } from 'react-bootstrap';


storiesOf('Table')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <div class="table table-striped table-hover" data-keboolaid=".0.3.0.1.0.1">
                <div class="thead" data-keboolaid=".0.3.0.1.0.1.$table-header">
                    <div class="tr" data-keboolaid=".0.3.0.1.0.1.$table-header.0"><span class="th"
                                                                                        data-keboolaid=".0.3.0.1.0.1.$table-header.0.0"><strong
                        data-keboolaid=".0.3.0.1.0.1.$table-header.0.0.0">Name</strong></span><span class="th"
                                                                                                    data-keboolaid=".0.3.0.1.0.1.$table-header.0.1"><strong
                        data-keboolaid=".0.3.0.1.0.1.$table-header.0.1.0">Last Run</strong></span><span class="th"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.$table-header.0.2"><strong
                        data-keboolaid=".0.3.0.1.0.1.$table-header.0.2.0">Duration</strong></span><span class="th"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.$table-header.0.3"><strong
                        data-keboolaid=".0.3.0.1.0.1.$table-header.0.3.0">Schedule</strong></span><span class="th"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.$table-header.0.4"></span>
                    </div>
                </div>
                <div class="tbody" data-keboolaid=".0.3.0.1.0.1.1"><a class="tr"
                                                                      href="/admin/projects/2376/orchestrations/254478952"
                                                                      data-keboolaid=".0.3.0.1.0.1.1.$254478952"><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$254478952.0"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-21-g9d7a3dc/e99009ece7097fad83478d0f738fce60.svg"
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.0.0"/><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.0.2">booooou</span></span><span class="td"
                                                                                              data-keboolaid=".0.3.0.1.0.1.1.$254478952.1"><span
                    title="2017-07-06 05:45:45" data-keboolaid=".0.3.0.1.0.1.1.$254478952.1.0"><i class="fa fa-calendar"
                                                                                                  data-keboolaid=".0.3.0.1.0.1.1.$254478952.1.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.1.0.1"> </span><span title="2017-07-06 05:45:45"
                                                                                   data-keboolaid=".0.3.0.1.0.1.1.$254478952.1.0.2">6 days ago</span></span></span><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$254478952.2"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.2.0"><i class="fa fa-clock-o"
                                                                      data-keboolaid=".0.3.0.1.0.1.1.$254478952.2.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.2.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.2.0.2"></span></span></span><span class="td"
                                                                                                data-keboolaid=".0.3.0.1.0.1.1.$254478952.3"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.3.0"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.3.0.0"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.3.0.0.0">Every 0, 4, 9, 17, 30 and 38th minute past the 0 and 3rd hour</span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.3.0.0.1"> (UTC) </span></span></span></span><span
                    class="td text-right kbc-no-wrap" data-keboolaid=".0.3.0.1.0.1.1.$254478952.4"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.4.$delete"><button class="btn btn-link"
                                                                                 data-keboolaid=".0.3.0.1.0.1.1.$254478952.4.$delete.0"><i
                    class="kbc-icon-cup" data-keboolaid=".0.3.0.1.0.1.1.$254478952.4.$delete.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.4.$delete.$modal"></noscript></span><button
                    class="btn btn-link" data-keboolaid=".0.3.0.1.0.1.1.$254478952.4.$activate"><i
                    class="fa fa-fw fa-check"
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.4.$activate.0"></i></button><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.4.$run"><button type="button" class="btn btn-link"
                                                                              data-keboolaid=".0.3.0.1.0.1.1.$254478952.4.$run.0"><i
                    class="fa fa-fw fa-play" data-keboolaid=".0.3.0.1.0.1.1.$254478952.4.$run.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$254478952.4.$run.1"></noscript></span></span></a><a class="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/254035890"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.1.$254035890"><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$254035890.0"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-21-g9d7a3dc/e99009ece7097fad83478d0f738fce60.svg"
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.0.0"/><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.0.2">nevym</span></span><span class="td"
                                                                                            data-keboolaid=".0.3.0.1.0.1.1.$254035890.1"><span
                    title="2017-07-04 02:00:29" data-keboolaid=".0.3.0.1.0.1.1.$254035890.1.0"><i class="fa fa-calendar"
                                                                                                  data-keboolaid=".0.3.0.1.0.1.1.$254035890.1.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.1.0.1"> </span><span title="2017-07-04 02:00:29"
                                                                                   data-keboolaid=".0.3.0.1.0.1.1.$254035890.1.0.2">8 days ago</span></span></span><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$254035890.2"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.2.0"><i class="fa fa-clock-o"
                                                                      data-keboolaid=".0.3.0.1.0.1.1.$254035890.2.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.2.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.2.0.2">4 min 33 sec</span></span></span><span class="td"
                                                                                                            data-keboolaid=".0.3.0.1.0.1.1.$254035890.3"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.3.0"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.3.0.0"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.3.0.0.0">00:00 on the 3 and 4th of every month</span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.3.0.0.1"> (UTC) </span></span></span></span><span
                    class="td text-right kbc-no-wrap" data-keboolaid=".0.3.0.1.0.1.1.$254035890.4"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.4.$delete"><button class="btn btn-link"
                                                                                 data-keboolaid=".0.3.0.1.0.1.1.$254035890.4.$delete.0"><i
                    class="kbc-icon-cup" data-keboolaid=".0.3.0.1.0.1.1.$254035890.4.$delete.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.4.$delete.$modal"></noscript></span><button
                    class="btn btn-link" data-keboolaid=".0.3.0.1.0.1.1.$254035890.4.$activate"><i
                    class="fa fa-fw fa-check"
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.4.$activate.0"></i></button><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.4.$run"><button type="button" class="btn btn-link"
                                                                              data-keboolaid=".0.3.0.1.0.1.1.$254035890.4.$run.0"><i
                    class="fa fa-fw fa-play" data-keboolaid=".0.3.0.1.0.1.1.$254035890.4.$run.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$254035890.4.$run.1"></noscript></span></span></a><a class="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/258978343"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.1.$258978343"><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$258978343.0"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-21-g9d7a3dc/e99009ece7097fad83478d0f738fce60.svg"
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.0.0"/><span
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.0.2">GDW orchestrace</span></span><span class="td"
                                                                                                      data-keboolaid=".0.3.0.1.0.1.1.$258978343.1"><span
                    title="2017-05-17 12:52:30" data-keboolaid=".0.3.0.1.0.1.1.$258978343.1.0"><i class="fa fa-calendar"
                                                                                                  data-keboolaid=".0.3.0.1.0.1.1.$258978343.1.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.1.0.1"> </span><span title="2017-05-17 12:52:30"
                                                                                   data-keboolaid=".0.3.0.1.0.1.1.$258978343.1.0.2">2 months ago</span></span></span><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$258978343.2"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.2.0"><i class="fa fa-clock-o"
                                                                      data-keboolaid=".0.3.0.1.0.1.1.$258978343.2.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.2.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.2.0.2">35 sec</span></span></span><span class="td"
                                                                                                      data-keboolaid=".0.3.0.1.0.1.1.$258978343.3"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.3.0">No Schedule</span></span><span
                    class="td text-right kbc-no-wrap" data-keboolaid=".0.3.0.1.0.1.1.$258978343.4"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.4.$delete"><button class="btn btn-link"
                                                                                 data-keboolaid=".0.3.0.1.0.1.1.$258978343.4.$delete.0"><i
                    class="kbc-icon-cup" data-keboolaid=".0.3.0.1.0.1.1.$258978343.4.$delete.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.4.$delete.$modal"></noscript></span><button
                    class="btn btn-link" data-keboolaid=".0.3.0.1.0.1.1.$258978343.4.$activate"><i
                    class="fa fa-fw fa-check"
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.4.$activate.0"></i></button><span
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.4.$run"><button type="button" class="btn btn-link"
                                                                              data-keboolaid=".0.3.0.1.0.1.1.$258978343.4.$run.0"><i
                    class="fa fa-fw fa-play" data-keboolaid=".0.3.0.1.0.1.1.$258978343.4.$run.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$258978343.4.$run.1"></noscript></span></span></a><a class="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/253397080"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.1.$253397080"><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$253397080.0"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-21-g9d7a3dc/e99009ece7097fad83478d0f738fce60.svg"
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.0.0"/><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.0.2">fb</span></span><span class="td"
                                                                                         data-keboolaid=".0.3.0.1.0.1.1.$253397080.1"><span
                    title="2017-05-05 00:18:54" data-keboolaid=".0.3.0.1.0.1.1.$253397080.1.0"><i class="fa fa-calendar"
                                                                                                  data-keboolaid=".0.3.0.1.0.1.1.$253397080.1.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.1.0.1"> </span><span title="2017-05-05 00:18:54"
                                                                                   data-keboolaid=".0.3.0.1.0.1.1.$253397080.1.0.2">2 months ago</span></span></span><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$253397080.2"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.2.0"><i class="fa fa-clock-o"
                                                                      data-keboolaid=".0.3.0.1.0.1.1.$253397080.2.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.2.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.2.0.2">51 sec</span></span></span><span class="td"
                                                                                                      data-keboolaid=".0.3.0.1.0.1.1.$253397080.3"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.3.0">No Schedule</span></span><span
                    class="td text-right kbc-no-wrap" data-keboolaid=".0.3.0.1.0.1.1.$253397080.4"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.4.$delete"><button class="btn btn-link"
                                                                                 data-keboolaid=".0.3.0.1.0.1.1.$253397080.4.$delete.0"><i
                    class="kbc-icon-cup" data-keboolaid=".0.3.0.1.0.1.1.$253397080.4.$delete.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.4.$delete.$modal"></noscript></span><button
                    class="btn btn-link" data-keboolaid=".0.3.0.1.0.1.1.$253397080.4.$activate"><i
                    class="fa fa-fw fa-check"
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.4.$activate.0"></i></button><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.4.$run"><button type="button" class="btn btn-link"
                                                                              data-keboolaid=".0.3.0.1.0.1.1.$253397080.4.$run.0"><i
                    class="fa fa-fw fa-play" data-keboolaid=".0.3.0.1.0.1.1.$253397080.4.$run.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$253397080.4.$run.1"></noscript></span></span></a><a class="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/263622569"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.1.$263622569"><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$263622569.0"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-21-g9d7a3dc/e99009ece7097fad83478d0f738fce60.svg"
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.0.0"/><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.0.2">Hrozna orchestrace</span></span><span class="td"
                                                                                                         data-keboolaid=".0.3.0.1.0.1.1.$263622569.1"><span
                    title="2017-05-02 18:13:07" data-keboolaid=".0.3.0.1.0.1.1.$263622569.1.0"><i class="fa fa-calendar"
                                                                                                  data-keboolaid=".0.3.0.1.0.1.1.$263622569.1.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.1.0.1"> </span><span title="2017-05-02 18:13:07"
                                                                                   data-keboolaid=".0.3.0.1.0.1.1.$263622569.1.0.2">2 months ago</span></span></span><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$263622569.2"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.2.0"><i class="fa fa-clock-o"
                                                                      data-keboolaid=".0.3.0.1.0.1.1.$263622569.2.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.2.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.2.0.2">1 min 18 sec</span></span></span><span class="td"
                                                                                                            data-keboolaid=".0.3.0.1.0.1.1.$263622569.3"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.3.0">No Schedule</span></span><span
                    class="td text-right kbc-no-wrap" data-keboolaid=".0.3.0.1.0.1.1.$263622569.4"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.4.$delete"><button class="btn btn-link"
                                                                                 data-keboolaid=".0.3.0.1.0.1.1.$263622569.4.$delete.0"><i
                    class="kbc-icon-cup" data-keboolaid=".0.3.0.1.0.1.1.$263622569.4.$delete.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.4.$delete.$modal"></noscript></span><button
                    class="btn btn-link" data-keboolaid=".0.3.0.1.0.1.1.$263622569.4.$activate"><i
                    class="fa fa-fw fa-check"
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.4.$activate.0"></i></button><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.4.$run"><button type="button" class="btn btn-link"
                                                                              data-keboolaid=".0.3.0.1.0.1.1.$263622569.4.$run.0"><i
                    class="fa fa-fw fa-play" data-keboolaid=".0.3.0.1.0.1.1.$263622569.4.$run.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$263622569.4.$run.1"></noscript></span></span></a><a class="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/253777920"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.1.$253777920"><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$253777920.0"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-21-g9d7a3dc/e99009ece7097fad83478d0f738fce60.svg"
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.0.0"/><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.0.2">Dat Or</span></span><span class="td"
                                                                                             data-keboolaid=".0.3.0.1.0.1.1.$253777920.1"><span
                    title="2017-04-26 16:37:06" data-keboolaid=".0.3.0.1.0.1.1.$253777920.1.0"><i class="fa fa-calendar"
                                                                                                  data-keboolaid=".0.3.0.1.0.1.1.$253777920.1.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.1.0.1"> </span><span title="2017-04-26 16:37:06"
                                                                                   data-keboolaid=".0.3.0.1.0.1.1.$253777920.1.0.2">2 months ago</span></span></span><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$253777920.2"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.2.0"><i class="fa fa-clock-o"
                                                                      data-keboolaid=".0.3.0.1.0.1.1.$253777920.2.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.2.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.2.0.2">32 sec</span></span></span><span class="td"
                                                                                                      data-keboolaid=".0.3.0.1.0.1.1.$253777920.3"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.3.0">No Schedule</span></span><span
                    class="td text-right kbc-no-wrap" data-keboolaid=".0.3.0.1.0.1.1.$253777920.4"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.4.$delete"><button class="btn btn-link"
                                                                                 data-keboolaid=".0.3.0.1.0.1.1.$253777920.4.$delete.0"><i
                    class="kbc-icon-cup" data-keboolaid=".0.3.0.1.0.1.1.$253777920.4.$delete.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.4.$delete.$modal"></noscript></span><button
                    class="btn btn-link" data-keboolaid=".0.3.0.1.0.1.1.$253777920.4.$activate"><i
                    class="fa fa-fw fa-check"
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.4.$activate.0"></i></button><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.4.$run"><button type="button" class="btn btn-link"
                                                                              data-keboolaid=".0.3.0.1.0.1.1.$253777920.4.$run.0"><i
                    class="fa fa-fw fa-play" data-keboolaid=".0.3.0.1.0.1.1.$253777920.4.$run.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$253777920.4.$run.1"></noscript></span></span></a><a class="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/254034676"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.1.$254034676"><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$254034676.0"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-21-g9d7a3dc/e99009ece7097fad83478d0f738fce60.svg"
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.0.0"/><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.0.2">test it</span></span><span class="td"
                                                                                              data-keboolaid=".0.3.0.1.0.1.1.$254034676.1"><span
                    title="2017-04-06 14:11:11" data-keboolaid=".0.3.0.1.0.1.1.$254034676.1.0"><i class="fa fa-calendar"
                                                                                                  data-keboolaid=".0.3.0.1.0.1.1.$254034676.1.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.1.0.1"> </span><span title="2017-04-06 14:11:11"
                                                                                   data-keboolaid=".0.3.0.1.0.1.1.$254034676.1.0.2">3 months ago</span></span></span><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$254034676.2"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.2.0"><i class="fa fa-clock-o"
                                                                      data-keboolaid=".0.3.0.1.0.1.1.$254034676.2.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.2.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.2.0.2">8 sec</span></span></span><span class="td"
                                                                                                     data-keboolaid=".0.3.0.1.0.1.1.$254034676.3"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.3.0"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.3.0.0"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.3.0.0.0">00:00, 00:15, 15:00 and 15:15 on Mon</span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.3.0.0.1"> (UTC) </span></span></span></span><span
                    class="td text-right kbc-no-wrap" data-keboolaid=".0.3.0.1.0.1.1.$254034676.4"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.4.$delete"><button class="btn btn-link"
                                                                                 data-keboolaid=".0.3.0.1.0.1.1.$254034676.4.$delete.0"><i
                    class="kbc-icon-cup" data-keboolaid=".0.3.0.1.0.1.1.$254034676.4.$delete.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.4.$delete.$modal"></noscript></span><button
                    class="btn btn-link" data-keboolaid=".0.3.0.1.0.1.1.$254034676.4.$activate"><i
                    class="fa fa-fw fa-times"
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.4.$activate.0"></i></button><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.4.$run"><button type="button" class="btn btn-link"
                                                                              data-keboolaid=".0.3.0.1.0.1.1.$254034676.4.$run.0"><i
                    class="fa fa-fw fa-play" data-keboolaid=".0.3.0.1.0.1.1.$254034676.4.$run.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$254034676.4.$run.1"></noscript></span></span></a><a class="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/253051623"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.1.$253051623"><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$253051623.0"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-21-g9d7a3dc/e99009ece7097fad83478d0f738fce60.svg"
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.0.0"/><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.0.2">hjhj</span></span><span class="td"
                                                                                           data-keboolaid=".0.3.0.1.0.1.1.$253051623.1"><span
                    title="2017-04-03 13:04:27" data-keboolaid=".0.3.0.1.0.1.1.$253051623.1.0"><i class="fa fa-calendar"
                                                                                                  data-keboolaid=".0.3.0.1.0.1.1.$253051623.1.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.1.0.1"> </span><span title="2017-04-03 13:04:27"
                                                                                   data-keboolaid=".0.3.0.1.0.1.1.$253051623.1.0.2">3 months ago</span></span></span><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$253051623.2"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.2.0"><i class="fa fa-clock-o"
                                                                      data-keboolaid=".0.3.0.1.0.1.1.$253051623.2.0.0"></i><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.2.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.2.0.2">8 sec</span></span></span><span class="td"
                                                                                                     data-keboolaid=".0.3.0.1.0.1.1.$253051623.3"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.3.0">No Schedule</span></span><span
                    class="td text-right kbc-no-wrap" data-keboolaid=".0.3.0.1.0.1.1.$253051623.4"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.4.$delete"><button class="btn btn-link"
                                                                                 data-keboolaid=".0.3.0.1.0.1.1.$253051623.4.$delete.0"><i
                    class="kbc-icon-cup" data-keboolaid=".0.3.0.1.0.1.1.$253051623.4.$delete.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.4.$delete.$modal"></noscript></span><button
                    class="btn btn-link" data-keboolaid=".0.3.0.1.0.1.1.$253051623.4.$activate"><i
                    class="fa fa-fw fa-check"
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.4.$activate.0"></i></button><span
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.4.$run"><button type="button" class="btn btn-link"
                                                                              data-keboolaid=".0.3.0.1.0.1.1.$253051623.4.$run.0"><i
                    class="fa fa-fw fa-play" data-keboolaid=".0.3.0.1.0.1.1.$253051623.4.$run.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$253051623.4.$run.1"></noscript></span></span></a><a class="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/254491600"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.1.$254491600"><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$254491600.0"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-21-g9d7a3dc/b1d8b9aeb9f12d4005f655f74d87c726.svg"
                    data-keboolaid=".0.3.0.1.0.1.1.$254491600.0.0"/><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254491600.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254491600.0.2">123</span></span><span class="td"
                                                                                          data-keboolaid=".0.3.0.1.0.1.1.$254491600.1"></span><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$254491600.2">No run yet</span><span class="td"
                                                                                                   data-keboolaid=".0.3.0.1.0.1.1.$254491600.3"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254491600.3.0">No Schedule</span></span><span
                    class="td text-right kbc-no-wrap" data-keboolaid=".0.3.0.1.0.1.1.$254491600.4"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254491600.4.$delete"><button class="btn btn-link"
                                                                                 data-keboolaid=".0.3.0.1.0.1.1.$254491600.4.$delete.0"><i
                    class="kbc-icon-cup" data-keboolaid=".0.3.0.1.0.1.1.$254491600.4.$delete.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$254491600.4.$delete.$modal"></noscript></span><button
                    class="btn btn-link" data-keboolaid=".0.3.0.1.0.1.1.$254491600.4.$activate"><i
                    class="fa fa-fw fa-check"
                    data-keboolaid=".0.3.0.1.0.1.1.$254491600.4.$activate.0"></i></button><span
                    data-keboolaid=".0.3.0.1.0.1.1.$254491600.4.$run"><button type="button" class="btn btn-link"
                                                                              data-keboolaid=".0.3.0.1.0.1.1.$254491600.4.$run.0"><i
                    class="fa fa-fw fa-play" data-keboolaid=".0.3.0.1.0.1.1.$254491600.4.$run.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$254491600.4.$run.1"></noscript></span></span></a><a class="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/263293442"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.1.$263293442"><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$263293442.0"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-21-g9d7a3dc/b1d8b9aeb9f12d4005f655f74d87c726.svg"
                    data-keboolaid=".0.3.0.1.0.1.1.$263293442.0.0"/><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263293442.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263293442.0.2">prazdna</span></span><span class="td"
                                                                                              data-keboolaid=".0.3.0.1.0.1.1.$263293442.1"></span><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$263293442.2">No run yet</span><span class="td"
                                                                                                   data-keboolaid=".0.3.0.1.0.1.1.$263293442.3"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263293442.3.0">No Schedule</span></span><span
                    class="td text-right kbc-no-wrap" data-keboolaid=".0.3.0.1.0.1.1.$263293442.4"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263293442.4.$delete"><button class="btn btn-link"
                                                                                 data-keboolaid=".0.3.0.1.0.1.1.$263293442.4.$delete.0"><i
                    class="kbc-icon-cup" data-keboolaid=".0.3.0.1.0.1.1.$263293442.4.$delete.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$263293442.4.$delete.$modal"></noscript></span><button
                    class="btn btn-link" data-keboolaid=".0.3.0.1.0.1.1.$263293442.4.$activate"><i
                    class="fa fa-fw fa-check"
                    data-keboolaid=".0.3.0.1.0.1.1.$263293442.4.$activate.0"></i></button><span
                    data-keboolaid=".0.3.0.1.0.1.1.$263293442.4.$run"><button type="button" class="btn btn-link"
                                                                              data-keboolaid=".0.3.0.1.0.1.1.$263293442.4.$run.0"><i
                    class="fa fa-fw fa-play" data-keboolaid=".0.3.0.1.0.1.1.$263293442.4.$run.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$263293442.4.$run.1"></noscript></span></span></a><a class="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/256532766"
                                                                                                        data-keboolaid=".0.3.0.1.0.1.1.$256532766"><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$256532766.0"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-21-g9d7a3dc/b1d8b9aeb9f12d4005f655f74d87c726.svg"
                    data-keboolaid=".0.3.0.1.0.1.1.$256532766.0.0"/><span
                    data-keboolaid=".0.3.0.1.0.1.1.$256532766.0.1"> </span><span
                    data-keboolaid=".0.3.0.1.0.1.1.$256532766.0.2">qwrqereqw</span></span><span class="td"
                                                                                                data-keboolaid=".0.3.0.1.0.1.1.$256532766.1"></span><span
                    class="td" data-keboolaid=".0.3.0.1.0.1.1.$256532766.2">No run yet</span><span class="td"
                                                                                                   data-keboolaid=".0.3.0.1.0.1.1.$256532766.3"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$256532766.3.0">No Schedule</span></span><span
                    class="td text-right kbc-no-wrap" data-keboolaid=".0.3.0.1.0.1.1.$256532766.4"><span
                    data-keboolaid=".0.3.0.1.0.1.1.$256532766.4.$delete"><button class="btn btn-link"
                                                                                 data-keboolaid=".0.3.0.1.0.1.1.$256532766.4.$delete.0"><i
                    class="kbc-icon-cup" data-keboolaid=".0.3.0.1.0.1.1.$256532766.4.$delete.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$256532766.4.$delete.$modal"></noscript></span><button
                    class="btn btn-link" data-keboolaid=".0.3.0.1.0.1.1.$256532766.4.$activate"><i
                    class="fa fa-fw fa-check"
                    data-keboolaid=".0.3.0.1.0.1.1.$256532766.4.$activate.0"></i></button><span
                    data-keboolaid=".0.3.0.1.0.1.1.$256532766.4.$run"><button type="button" class="btn btn-link"
                                                                              data-keboolaid=".0.3.0.1.0.1.1.$256532766.4.$run.0"><i
                    class="fa fa-fw fa-play" data-keboolaid=".0.3.0.1.0.1.1.$256532766.4.$run.0.0"></i></button><noscript
                    data-keboolaid=".0.3.0.1.0.1.1.$256532766.4.$run.1"></noscript></span></span></a></div>
            </div>
        ),
        {
            inline: true,
        }
    )
;
