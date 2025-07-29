import * as React from "react";
import {
  PlasmicCanvasHost,
  registerComponent,
  registerGlobalContext,
} from "@plasmicapp/react-web/lib/host";

import { Fragment, fragmentMeta } from "@/fragment/fragment";
import { GrowthBook, growthBookMeta } from "@/fragment/growthbook";
import { DatePicker, datePickerMeta } from "@/fragment/components/date-picker";
import { TimePicker, timePickerMeta } from "@/fragment/components/time-picker";
import { Splunk, splunkMeta } from "@/fragment/splunk";
import { Popover, popoverMeta } from "@/fragment/components/popover";
import { Select, selectMeta } from "@/fragment/components/select";
import { Input, inputMeta } from "@/fragment/components/input";
import { Switch, switchMeta } from "@/fragment/components/switch";
import { ApiRequest, apiRequestMeta } from "@/fragment/components/api-request";
import { Slider, sliderMeta } from "@/fragment/components/slider";
import { Chart, chartMeta } from "@/fragment/components/chart";
import { Textarea, textareaMeta } from "@/fragment/components/textarea";
import {DatePickers,DatePickersMeta} from "@/components/DatePickers";
import {Pickers,PickersMeta} from "@/components/Pickers";
import {PullToRefresh,PullToRefreshMeta} from "@/components/PullToRefresh";
import {SwiperSlider,SwiperSliderMeta} from "@/components/SwiperSlider";
import {BackHandler,BackHandlerMeta} from "@/components/BackHandler";



export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

registerGlobalContext(Fragment, fragmentMeta);
registerGlobalContext(GrowthBook, growthBookMeta);
registerGlobalContext(Splunk, splunkMeta);
registerComponent(DatePicker, datePickerMeta);
registerComponent(TimePicker, timePickerMeta);
registerComponent(Popover, popoverMeta);
registerComponent(Select, selectMeta);
registerComponent(Input, inputMeta);
registerComponent(Switch, switchMeta);
registerComponent(Slider, sliderMeta);
registerComponent(ApiRequest, apiRequestMeta);
registerComponent(Chart, chartMeta);
registerComponent(Textarea, textareaMeta);
registerComponent(DatePickers, DatePickersMeta);
registerComponent(Pickers, PickersMeta);
registerComponent(PullToRefresh, PullToRefreshMeta);
registerComponent(SwiperSlider,SwiperSliderMeta );
registerComponent(BackHandler,BackHandlerMeta );


