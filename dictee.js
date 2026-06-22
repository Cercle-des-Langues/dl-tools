/* dictee.js - CDL Dictee self-mounting widget. Mounts into #cdl-dictee. Needs cdl-tools.js. Generated; rebuild from dictee_widget.html. */
(function(){"use strict";if(window.__cdlDicteeMounted)return;window.__cdlDicteeMounted=true;
function u8(b){var s=atob(b),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return new TextDecoder('utf-8').decode(a);}
var mount=document.getElementById('cdl-dictee');if(!mount){mount=document.createElement('div');mount.id='cdl-dictee';document.body.appendChild(mount);}
mount.style.display='block';mount.style.width='100%';mount.style.maxWidth='800px';mount.style.margin='0 auto';
mount.innerHTML=u8("PHN0eWxlPgogICAgLmRpY3RlZS1hcHAgKiwKICAgIC5kaWN0ZWUtYXBwICo6OmJlZm9yZSwKICAgIC5kaWN0ZWUtYXBwICo6OmFmdGVyIHsKICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAwOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIHsKICAgICAgICAtLW5hdnk6ICMyNjMyMzg7CiAgICAgICAgLS1nb2xkOiAjZmZjNDAwOwogICAgICAgIC0tZ3JlZW46ICMxYWJjOWM7CiAgICAgICAgLS1jcmVhbTogI2ZkZmJmNzsKICAgICAgICAtLXdoaXRlOiAjZmZmZmZmOwogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICAgICAgY29sb3I6IHZhcigtLW5hdnkpOwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgfQoKICAgIC8qIOKUgOKUgCBMZXZlbCBzZWxlY3RvciDilIDilIAgKi8KICAgIC5kaWN0ZWUtYXBwIC5sZXZlbHMgewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGdhcDogMC41cmVtOwogICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmxldmVsLWJ0biB7CiAgICAgICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTsKICAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDsKICAgICAgICBmb250LXNpemU6IDAuODVyZW07CiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDM4LCA1MCwgNTYsIDAuMTUpOwogICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTsKICAgICAgICBjb2xvcjogdmFyKC0tbmF2eSk7CiAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzOwogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmxldmVsLWJ0bjpob3ZlciB7CiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDM4LCA1MCwgNTYsIDAuNCk7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmxldmVsLWJ0bi5hY3RpdmUgewogICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW5hdnkpOwogICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7CiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1uYXZ5KTsKICAgICAgICBib3gtc2hhZG93OiAwIDAgMTZweCByZ2JhKDM4LCA1MCwgNTYsIDAuMTYpOwogICAgfQoKICAgIC8qIOKUgOKUgCBDYXJkIOKUgOKUgCAqLwogICAgLmRpY3RlZS1hcHAgLmNhcmQgewogICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIG1heC13aWR0aDogNDhyZW07CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTsKICAgICAgICBib3gtc2hhZG93OiAwIDAgMjRweCByZ2JhKDM4LCA1MCwgNTYsIDAuMTIpOwogICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzgsIDUwLCA1NiwgMC4wNCk7CiAgICAgICAgcGFkZGluZzogMi41cmVtIDJyZW07CiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICB9CgogICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7CiAgICAgICAgLmRpY3RlZS1hcHAgLmNhcmQgewogICAgICAgICAgICBwYWRkaW5nOiAzcmVtOwogICAgICAgIH0KICAgIH0KCiAgICAuZGljdGVlLWFwcCAucHJvZ3Jlc3MtdHJhY2sgewogICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICB0b3A6IDA7CiAgICAgICAgbGVmdDogMDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBoZWlnaHQ6IDRweDsKICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM4LCA1MCwgNTYsIDAuMDQpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5wcm9ncmVzcy1maWxsIHsKICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ29sZCk7CiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5jYXJkLWhlYWRlciB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBnYXA6IDAuNXJlbTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAucGhyYXNlLWNvdW50IHsKICAgICAgICBjb2xvcjogdmFyKC0tZ29sZCk7CiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgICBmb250LXNpemU6IDEuMDVyZW07CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmxpc3Rlbi1sYWJlbCB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGdhcDogMC40cmVtOwogICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTsKICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07CiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgICBjb2xvcjogdmFyKC0tbmF2eSk7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmxpc3Rlbi1sYWJlbCBzdmcgewogICAgICAgIHdpZHRoOiAxNnB4OwogICAgICAgIGhlaWdodDogMTZweDsKICAgIH0KCiAgICAvKiDilIDilIAgUGxheSBidXR0b24g4pSA4pSAICovCiAgICAuZGljdGVlLWFwcCAucGxheS1hcmVhIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBnYXA6IDFyZW07CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAucGxheS1idG4gewogICAgICAgIHdpZHRoOiA2cmVtOwogICAgICAgIGhlaWdodDogNnJlbTsKICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7CiAgICAgICAgYm9yZGVyOiBub25lOwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTsKICAgICAgICBib3gtc2hhZG93OiAwIDAgMjRweCByZ2JhKDM4LCA1MCwgNTYsIDAuMTIpOwogICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTsKICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5wbGF5LWJ0bjpob3ZlciB7CiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsKICAgICAgICBib3gtc2hhZG93OiAwIDAgMjhweCByZ2JhKDM4LCA1MCwgNTYsIDAuMTYpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5wbGF5LWJ0bjphY3RpdmUgewogICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLnBsYXktYnRuLnBsYXlpbmcgewogICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdvbGQpOwogICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsKICAgICAgICBib3gtc2hhZG93OiAwIDAgMjRweCByZ2JhKDM4LCA1MCwgNTYsIDAuMTQpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5wbGF5LWJ0biBzdmcgewogICAgICAgIHdpZHRoOiA0MHB4OwogICAgICAgIGhlaWdodDogNDBweDsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuc291bmQtYmFycyB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBnYXA6IDNweDsKICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7CiAgICAgICAgaGVpZ2h0OiAycmVtOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5zb3VuZC1iYXIgewogICAgICAgIHdpZHRoOiA1cHg7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4OwogICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OwogICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5zb3VuZC1iYXI6bnRoLWNoaWxkKDEpIHsKICAgICAgICBhbmltYXRpb246IGRpY3RlZS1iYXIxIDAuNXMgaW5maW5pdGU7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLnNvdW5kLWJhcjpudGgtY2hpbGQoMikgewogICAgICAgIGFuaW1hdGlvbjogZGljdGVlLWJhcjIgMC42cyBpbmZpbml0ZTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuc291bmQtYmFyOm50aC1jaGlsZCgzKSB7CiAgICAgICAgYW5pbWF0aW9uOiBkaWN0ZWUtYmFyMyAwLjRzIGluZmluaXRlOwogICAgfQoKICAgIEBrZXlmcmFtZXMgZGljdGVlLWJhcjEgewoKICAgICAgICAwJSwKICAgICAgICAxMDAlIHsKICAgICAgICAgICAgaGVpZ2h0OiAxMHB4OwogICAgICAgIH0KCiAgICAgICAgNTAlIHsKICAgICAgICAgICAgaGVpZ2h0OiAzMHB4OwogICAgICAgIH0KICAgIH0KCiAgICBAa2V5ZnJhbWVzIGRpY3RlZS1iYXIyIHsKCiAgICAgICAgMCUsCiAgICAgICAgMTAwJSB7CiAgICAgICAgICAgIGhlaWdodDogMjBweDsKICAgICAgICB9CgogICAgICAgIDUwJSB7CiAgICAgICAgICAgIGhlaWdodDogMTBweDsKICAgICAgICB9CiAgICB9CgogICAgQGtleWZyYW1lcyBkaWN0ZWUtYmFyMyB7CgogICAgICAgIDAlLAogICAgICAgIDEwMCUgewogICAgICAgICAgICBoZWlnaHQ6IDE1cHg7CiAgICAgICAgfQoKICAgICAgICA1MCUgewogICAgICAgICAgICBoZWlnaHQ6IDI1cHg7CiAgICAgICAgfQogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5zb3VuZC1iYXJzLWhpZGRlbiB7CiAgICAgICAgZGlzcGxheTogbm9uZTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuYXVkaW8tZXJyb3IgewogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBkaXNwbGF5OiBub25lOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5hdWRpby1lcnJvci52aXNpYmxlIHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuYXVkaW8tZXJyb3IgcCB7CiAgICAgICAgY29sb3I6ICNDNTI4M0Q7CiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtOwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmF1ZGlvLWVycm9yIGEgewogICAgICAgIGNvbG9yOiByZ2JhKDM4LCA1MCwgNTYsIDAuNSk7CiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtOwogICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5hdWRpby1lcnJvciBhOmhvdmVyIHsKICAgICAgICBjb2xvcjogdmFyKC0tbmF2eSk7CiAgICB9CgogICAgLyog4pSA4pSAIElucHV0IOKUgOKUgCAqLwogICAgLmRpY3RlZS1hcHAgLmlucHV0LWFyZWEgewogICAgICAgIHdpZHRoOiAxMDAlOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5pbnB1dC13cmFwcGVyIHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuZGljdGVlLWlucHV0IHsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MywgMjUxLCAyNDcsIDAuNSk7CiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgzOCwgNTAsIDU2LCAwLjA4KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtOwogICAgICAgIHBhZGRpbmc6IDFyZW0gMy41cmVtIDFyZW0gMS41cmVtOwogICAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTsKICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOwogICAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTsKICAgICAgICBvdXRsaW5lOiBub25lOwogICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5kaWN0ZWUtaW5wdXQ6OnBsYWNlaG9sZGVyIHsKICAgICAgICBjb2xvcjogcmdiYSgzOCwgNTAsIDU2LCAwLjMpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5kaWN0ZWUtaW5wdXQ6Zm9jdXMgewogICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ29sZCk7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjE4KTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuZGljdGVlLWlucHV0LmNvcnJlY3QgewogICAgICAgIGJvcmRlci1jb2xvcjogIzFBQkM5QzsKICAgICAgICBiYWNrZ3JvdW5kOiAjRTBGNkYxOwogICAgICAgIGNvbG9yOiAjMEE2QjVBOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5kaWN0ZWUtaW5wdXQuaW5jb3JyZWN0IHsKICAgICAgICBib3JkZXItY29sb3I6ICNDNTI4M0Q7CiAgICAgICAgYmFja2dyb3VuZDogI0ZCQ0RENDsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuaW5wdXQtaWNvbiB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHJpZ2h0OiAxcmVtOwogICAgICAgIHRvcDogNTAlOwogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsKICAgICAgICBkaXNwbGF5OiBub25lOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5pbnB1dC1pY29uLnZpc2libGUgewogICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgIGFuaW1hdGlvbjogZGljdGVlLXBvcEluIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5pbnB1dC1pY29uIHN2ZyB7CiAgICAgICAgd2lkdGg6IDI4cHg7CiAgICAgICAgaGVpZ2h0OiAyOHB4OwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5pbnB1dC1pY29uLmNvcnJlY3QtaWNvbiBzdmcgewogICAgICAgIGNvbG9yOiAjMUFCQzlDOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5pbnB1dC1pY29uLmluY29ycmVjdC1pY29uIHN2ZyB7CiAgICAgICAgY29sb3I6ICNDNTI4M0Q7CiAgICB9CgogICAgQGtleWZyYW1lcyBkaWN0ZWUtcG9wSW4gewogICAgICAgIDAlIHsKICAgICAgICAgICAgb3BhY2l0eTogMDsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDAuNSk7CiAgICAgICAgfQoKICAgICAgICAxMDAlIHsKICAgICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEpOwogICAgICAgIH0KICAgIH0KCiAgICAvKiDilIDilIAgRmVlZGJhY2sg4pSA4pSAICovCiAgICAuZGljdGVlLWFwcCAuZmVlZGJhY2sgewogICAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgICAgZ2FwOiAxcmVtOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5mZWVkYmFjaz4qIHsKICAgICAgICBhbmltYXRpb246IGRpY3RlZS1mYWRlVXAgMC4zcyBlYXNlOwogICAgfQoKICAgIEBrZXlmcmFtZXMgZGljdGVlLWZhZGVVcCB7CiAgICAgICAgMCUgewogICAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTsKICAgICAgICB9CgogICAgICAgIDEwMCUgewogICAgICAgICAgICBvcGFjaXR5OiAxOwogICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7CiAgICAgICAgfQogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5tc2ctY29ycmVjdCB7CiAgICAgICAgY29sb3I6ICMxNTk2N0Q7CiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgICBmb250LXNpemU6IDEuMnJlbTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAubXNnLWNvcnJlY3Qtc3ViIHsKICAgICAgICBjb2xvcjogcmdiYSgyMSwgMTUwLCAxMjUsIDAuNTUpOwogICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTsKICAgICAgICBmb250LXdlaWdodDogNTAwOwogICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAubXNnLWluY29ycmVjdCB7CiAgICAgICAgY29sb3I6ICNDNTI4M0Q7CiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsKICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmFjdGlvbi1yb3cgewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZ2FwOiAxLjVyZW07CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmFjdGlvbi1idG4gewogICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZ2FwOiAwLjRyZW07CiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgYmFja2dyb3VuZDogbm9uZTsKICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsKICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzOwogICAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuYWN0aW9uLWJ0bjpob3ZlciB7CiAgICAgICAgY29sb3I6IHZhcigtLWdvbGQpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5hY3Rpb24tYnRuLm11dGVkIHsKICAgICAgICBjb2xvcjogcmdiYSgzOCwgNTAsIDU2LCAwLjUpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5hY3Rpb24tYnRuLm11dGVkOmhvdmVyIHsKICAgICAgICBjb2xvcjogdmFyKC0tbmF2eSk7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmFjdGlvbi1idG4gc3ZnIHsKICAgICAgICB3aWR0aDogMTVweDsKICAgICAgICBoZWlnaHQ6IDE1cHg7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLnNraXAtYnRuIHsKICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07CiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBnYXA6IDAuNHJlbTsKICAgICAgICBmb250LXNpemU6IDAuOHJlbTsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgYmFja2dyb3VuZDogbm9uZTsKICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsKICAgICAgICBjb2xvcjogcmdiYSgzOCwgNTAsIDU2LCAwLjQpOwogICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDM4LCA1MCwgNTYsIDAuMTUpOwogICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7CiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yczsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuc2tpcC1idG46aG92ZXIgewogICAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuc2tpcC1idG4gc3ZnIHsKICAgICAgICB3aWR0aDogMTRweDsKICAgICAgICBoZWlnaHQ6IDE0cHg7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmNvcnJlY3Rpb24gewogICAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtOwogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzgsIDUwLCA1NiwgMC4wNCk7CiAgICAgICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTsKICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOwogICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsKICAgICAgICBmb250LXNpemU6IDEuMTVyZW07CiAgICAgICAgY29sb3I6IHZhcigtLW5hdnkpOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAubmV4dC1idG4gewogICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW5hdnkpOwogICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7CiAgICAgICAgcGFkZGluZzogMC43NXJlbSAycmVtOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4OwogICAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTsKICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBnYXA6IDAuNXJlbTsKICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOwogICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMzgsIDUwLCA1NiwgMC4xNCk7CiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLm5leHQtYnRuOmhvdmVyIHsKICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM4LCA1MCwgNTYsIDAuODUpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMCAyNnB4IHJnYmEoMzgsIDUwLCA1NiwgMC4xNik7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLm5leHQtYnRuOmFjdGl2ZSB7CiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAubmV4dC1idG4gc3ZnIHsKICAgICAgICB3aWR0aDogMjBweDsKICAgICAgICBoZWlnaHQ6IDIwcHg7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmhpbnQtdGV4dCB7CiAgICAgICAgY29sb3I6IHJnYmEoMzgsIDUwLCA1NiwgMC4zNSk7CiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07CiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07CiAgICAgICAgZGlzcGxheTogbm9uZTsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGdhcDogMC40cmVtOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5oaW50LXRleHQudmlzaWJsZSB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgIH0KCiAgICAvKiDilIDilIAgVsOpcmlmaWVyIGJ1dHRvbiDilIDilIAgKi8KICAgIC5kaWN0ZWUtYXBwIC52ZXJpZnktYnRuIHsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBtYXJnaW4tdG9wOiAxcmVtOwogICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICBwYWRkaW5nOiAwLjg1cmVtIDEuNXJlbTsKICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nb2xkKTsKICAgICAgICBjb2xvcjogdmFyKC0tbmF2eSk7CiAgICAgICAgYm9yZGVyOiBub25lOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4OwogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtOwogICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7CiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTsKICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDM4LCA1MCwgNTYsIDAuMTIpOwogICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzOwogICAgfQogICAgLmRpY3RlZS1hcHAgLnZlcmlmeS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkgewogICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjk2KTsKICAgICAgICBib3gtc2hhZG93OiAwIDAgMjZweCByZ2JhKDM4LCA1MCwgNTYsIDAuMTYpOwogICAgfQogICAgLmRpY3RlZS1hcHAgLnZlcmlmeS1idG46YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHsKICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpOwogICAgfQogICAgLmRpY3RlZS1hcHAgLnZlcmlmeS1idG46ZGlzYWJsZWQgewogICAgICAgIG9wYWNpdHk6IDAuNDsKICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7CiAgICAgICAgYm94LXNoYWRvdzogbm9uZTsKICAgIH0KCiAgICAvKiDilIDilIAgU3RyZWFrIGJhbm5lciDilIDilIAgKi8KICAgIC5kaWN0ZWUtYXBwIC5zdHJlYWstYmFubmVyIHsKICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOwogICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7CiAgICAgICAgZm9udC1zaXplOiAxNHB4OwogICAgICAgIGNvbG9yOiAjRkZDNDAwOwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtOwogICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07CiAgICB9CgogICAgLyog4pSA4pSAIE1pbGVzdG9uZSB0ZW5zaW9uIGxpbmUg4pSA4pSAICovCiAgICAuZGljdGVlLWFwcCAubWlsZXN0b25lLWxpbmUgewogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDEzcHg7CiAgICAgICAgY29sb3I6ICMxQUJDOUM7CiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgIG1hcmdpbjogMC41cmVtIDAgMDsKICAgIH0KCiAgICAvKiDilIDilIAgUGVyZm9ybWFuY2UgZ3JhZGUgb3ZlcmxheSDilIDilIAgKi8KICAgIC8qIFtoaWRkZW5dIG11c3QgYmVhdCB0aGUgZGlzcGxheSBydWxlcyBiZWxvdywgb3IgdGhlIG92ZXJsYXkgc2hvd3MgZW1wdHkgb24gbG9hZC4gKi8KICAgIC5kaWN0ZWUtYXBwIFtoaWRkZW5dIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9CgogICAgLmRpY3RlZS1hcHAgLmdyYWRlLW92ZXJsYXkgewogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICBpbnNldDogMDsKICAgICAgICB6LWluZGV4OiA5OTk4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBwYWRkaW5nOiAyMHB4OwogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzgsIDUwLCA1NiwgMC41NSk7CiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7CiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsKICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTsKICAgIH0KICAgIC5kaWN0ZWUtYXBwIC5ncmFkZS1vdmVybGF5LnNsaWRlLXVwIHsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpOwogICAgICAgIG9wYWNpdHk6IDA7CiAgICB9CiAgICAuZGljdGVlLWFwcCAuZ3JhZGUtY2FyZCB7CiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjsKICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4OwogICAgICAgIHBhZGRpbmc6IDMycHggMjhweDsKICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDI0cHggcmdiYSgzOCwgNTAsIDU2LCAwLjE1KTsKICAgICAgICBtYXgtd2lkdGg6IDM2MHB4OwogICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIGFuaW1hdGlvbjogZGljdGVlLWZhZGVVcCAwLjNzIGVhc2U7CiAgICB9CiAgICAuZGljdGVlLWFwcCAuZ3JhZGUtYmFkZ2UgewogICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICAgICAgICBwYWRkaW5nOiA1cHggMTRweDsKICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4OwogICAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07CiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4OwogICAgfQogICAgLmRpY3RlZS1hcHAgLmdyYWRlLXNjb3JlIHsKICAgICAgICBmb250LXNpemU6IDNyZW07CiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDsKICAgICAgICBjb2xvcjogIzI2MzIzODsKICAgICAgICBsaW5lLWhlaWdodDogMTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgfQogICAgLmRpY3RlZS1hcHAgLmdyYWRlLW1zZyB7CiAgICAgICAgZm9udC1zaXplOiAxcmVtOwogICAgICAgIGNvbG9yOiAjMjYzMjM4OwogICAgICAgIG9wYWNpdHk6IDAuODU7CiAgICAgICAgbWFyZ2luOiAwOwogICAgfQo8L3N0eWxlPgoKPGRpdiBjbGFzcz0iZGljdGVlLWFwcCIgaWQ9ImRpY3RlZUFwcCI+CiAgICA8ZGl2IGNsYXNzPSJsZXZlbHMiIGlkPSJkaWN0ZWUtbGV2ZWxzIj48L2Rpdj4KICAgIDxkaXYgY2xhc3M9InN0cmVhay1iYW5uZXIiIGlkPSJkaWN0ZWUtc3RyZWFrIiBoaWRkZW4+PC9kaXY+CgogICAgPGRpdiBjbGFzcz0iY2FyZCI+CiAgICAgICAgPGRpdiBjbGFzcz0icHJvZ3Jlc3MtdHJhY2siPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJwcm9ncmVzcy1maWxsIiBpZD0iZGljdGVlLXByb2dyZXNzRmlsbCI+PC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ibWlsZXN0b25lLWxpbmUiIGlkPSJkaWN0ZWUtbWlsZXN0b25lIiBoaWRkZW4+PC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImNhcmQtaGVhZGVyIj4KICAgICAgICAgICAgPHNwYW4gY2xhc3M9InBocmFzZS1jb3VudCIgaWQ9ImRpY3RlZS1waHJhc2VDb3VudCI+PC9zcGFuPgogICAgICAgICAgICA8c3BhbiBjbGFzcz0ibGlzdGVuLWxhYmVsIj4KICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDUiIC8+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjU0IDguNDZhNSA1IDAgMCAxIDAgNy4wNyIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuMDcgNC45M2ExMCAxMCAwIDAgMSAwIDE0LjE0IiAvPgogICAgICAgICAgICAgICAgPC9zdmc+CiAgICAgICAgICAgICAgICDDiWNvdXRleiBhdHRlbnRpdmVtZW50CiAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0icGxheS1hcmVhIj4KICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0icGxheS1idG4iIGlkPSJkaWN0ZWUtcGxheUJ0biI+CiAgICAgICAgICAgICAgICA8c3ZnIGlkPSJkaWN0ZWUtcGxheUljb24iIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIiBzdHJva2U9Im5vbmUiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iNSAzIDE5IDEyIDUgMjEgNSAzIiAvPgogICAgICAgICAgICAgICAgPC9zdmc+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzb3VuZC1iYXJzIHNvdW5kLWJhcnMtaGlkZGVuIiBpZD0iZGljdGVlLXNvdW5kQmFycyI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic291bmQtYmFyIj48L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzb3VuZC1iYXIiPjwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNvdW5kLWJhciI+PC9kaXY+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImF1ZGlvLWVycm9yIiBpZD0iZGljdGVlLWF1ZGlvRXJyb3IiPgogICAgICAgICAgICAgICAgPHA+RXJyZXVyIDogRmljaGllciBhdWRpbyBpbnRyb3V2YWJsZSBvdSBpbmFjY2Vzc2libGUuPC9wPgogICAgICAgICAgICAgICAgPGEgaWQ9ImRpY3RlZS1hdWRpb0Vycm9yTGluayIgaHJlZj0iIyIgdGFyZ2V0PSJfYmxhbmsiIHJlbD0ibm9vcGVuZXIgbm9yZWZlcnJlciI+VGVzdGVyIGwnYWNjw6hzCiAgICAgICAgICAgICAgICAgICAgZGlyZWN0PC9hPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGF1ZGlvIGlkPSJkaWN0ZWUtYXVkaW8iIHByZWxvYWQ9ImF1dG8iIHN0eWxlPSJkaXNwbGF5Om5vbmUiPjwvYXVkaW8+CgogICAgICAgIDxkaXYgY2xhc3M9ImlucHV0LWFyZWEiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJpbnB1dC13cmFwcGVyIj4KICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0iZGljdGVlLWlucHV0IiBjbGFzcz0iZGljdGVlLWlucHV0IiBwbGFjZWhvbGRlcj0iw4ljcml2ZXogbGEgcGhyYXNlIGljaS4uLiIKICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9Im9mZiIgLz4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImlucHV0LWljb24gY29ycmVjdC1pY29uIiBpZD0iZGljdGVlLWljb25Db3JyZWN0Ij4KICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIyIDExLjA4VjEyYTEwIDEwIDAgMSAxLTUuOTMtOS4xNCIgLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz0iMjIgNCAxMiAxNC4wMSA5IDExLjAxIiAvPgogICAgICAgICAgICAgICAgICAgIDwvc3ZnPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJpbnB1dC1pY29uIGluY29ycmVjdC1pY29uIiBpZD0iZGljdGVlLWljb25JbmNvcnJlY3QiPgogICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjE1IiB5MT0iOSIgeDI9IjkiIHkyPSIxNSIgLz4KICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjkiIHkxPSI5IiB4Mj0iMTUiIHkyPSIxNSIgLz4KICAgICAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZlZWRiYWNrIiBpZD0iZGljdGVlLWZlZWRiYWNrIj48L2Rpdj4KICAgICAgICAgICAgPGJ1dHRvbiBpZD0iZGljdGVlLWNoZWNrQnRuIiBjbGFzcz0idmVyaWZ5LWJ0biIgZGlzYWJsZWQ+VsOpcmlmaWVyPC9idXR0b24+CiAgICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJncmFkZS1vdmVybGF5IiBpZD0iZGljdGVlLWdyYWRlIiBoaWRkZW4+CiAgICAgICAgPGRpdiBjbGFzcz0iZ3JhZGUtY2FyZCI+CiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJncmFkZS1iYWRnZSIgaWQ9ImRpY3RlZS1ncmFkZS1iYWRnZSI+PC9zcGFuPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJncmFkZS1zY29yZSIgaWQ9ImRpY3RlZS1ncmFkZS1zY29yZSI+PC9kaXY+CiAgICAgICAgICAgIDxwIGNsYXNzPSJncmFkZS1tc2ciIGlkPSJkaWN0ZWUtZ3JhZGUtbXNnIj48L3A+CiAgICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KPC9kaXY+Cgo=");
    (function () {
        var GITHUB_BASE = 'https://raw.githubusercontent.com/CDL-mkt/outil-dictee/main/';
        var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

        var PHRASES = {
            A1: [
                { text: "I am a student", audio: GITHUB_BASE + "Dictee-A1%20I%20am%20a%20student.mp3" },
                { text: "I have a meeting", audio: GITHUB_BASE + "Dictee-A1%20I%20have%20a%20meeting.mp3" },
                { text: "The dog is big", audio: GITHUB_BASE + "Dictee-A1%20The%20dog%20is%20big..mp3" },
                { text: "The office is open", audio: GITHUB_BASE + "Dictee-A1%20The%20office%20is%20open.mp3" },
                { text: "She has a pen", audio: GITHUB_BASE + "Dictee-A1%20She%20has%20a%20pen.mp3" },
                { text: "She is my boss", audio: GITHUB_BASE + "Dictee-A1%20She%20is%20my%20boss.mp3" },
                { text: "We go to the park", audio: GITHUB_BASE + "Dictee-A1%20We%20go%20to%20the%20park.mp3" },
                { text: "We use a computer", audio: GITHUB_BASE + "Dictee-A1%20We%20use%20a%20computer.mp3" },
                { text: "He lives in a house", audio: GITHUB_BASE + "Dictee-A1%20He%20lives%20in%20a%20house.mp3" },
                { text: "He works in sales", audio: GITHUB_BASE + "Dictee-A1%20He%20works%20in%20sales.mp3" },
            ],
            A2: [
                { text: "We visited the city last week", audio: GITHUB_BASE + "Dictee-A2%20We%20visited%20the%20city%20last%20week.mp3" },
                { text: "I need to book a meeting room.", audio: GITHUB_BASE + "Dictee-A2%20I%20need%20to%20book%20a%20meeting%20room..mp3" },
                { text: "She bought some bread and milk", audio: GITHUB_BASE + "Dictee-A2%20She%20bought%20some%20bread%20and%20milk.mp3" },
                { text: "Could you please sign this document", audio: GITHUB_BASE + "Dictee-A2%20Could%20you%20please%20sign%20this%20document.mp3" },
                { text: "There are three children in the room", audio: GITHUB_BASE + "Dictee-A2%20There%20are%20three%20children%20in%20the%20room.mp3" },
                { text: "I am looking for a job in a big company.", audio: GITHUB_BASE + "Dictee-A2%20I%20am%20looking%20for%20a%20job%20in%20a%20big%20company..mp3" },
                { text: "He walked to the office yesterday", audio: GITHUB_BASE + "Dictee-A2%20He%20walked%20to%20the%20office%20yesterday..mp3" },
                { text: "He arrives in the office early in the morning", audio: GITHUB_BASE + "Dictee-A2%20He%20arrives%20in%20the%20office%20early%20in%20the%20morning.mp3" },
                { text: "My friend sent me a long email", audio: GITHUB_BASE + "Dictee-A2%20My%20friend%20sent%20me%20a%20long%20email.mp3" },
                { text: "The elevator is out of order today.", audio: GITHUB_BASE + "Dictee-A2%20The%20elevator%20is%20out%20of%20order%20today..mp3" },
            ],
            B1: [
                { text: "They believe their team will win the match", audio: GITHUB_BASE + "Dictee-B1%20They%20believe%20their%20team%20will%20win%20the%20match..mp3" },
                { text: "The marketing team is working on a new advert.", audio: GITHUB_BASE + "Dictee-B1%20The%20marketing%20team%20is%20working%20on%20a%20new%20advert..mp3" },
                { text: "I have already finished my homework", audio: GITHUB_BASE + "Dictee-B1%20I%20have%20already%20finished%20my%20homework..mp3" },
                { text: "We have an important presentation next Tuesday.", audio: GITHUB_BASE + "Dictee-B1%20We%20have%20an%20important%20presentation%20next%20Tuesday..mp3" },
                { text: "She definitely wants to study abroad", audio: GITHUB_BASE + "Dictee-B1%20She%20definitely%20wants%20to%20study%20abroad.mp3" },
                { text: "She sent the feedback to the client this morning.", audio: GITHUB_BASE + "Dictee-B1%20She%20sent%20the%20feedback%20to%20the%20client%20this%20morning..mp3" },
                { text: "We were waiting for the bus for an hour", audio: GITHUB_BASE + "Dictee-B1%20We%20were%20waiting%20for%20the%20bus%20for%20an%20hour..mp3" },
                { text: "Our manager is very happy with the results.", audio: GITHUB_BASE + "Dictee-B1%20Our%20manager%20is%20very%20happy%20with%20the%20results..mp3" },
                { text: "He thinks it is a beautiful country", audio: GITHUB_BASE + "Dictee-B1%20He%20thinks%20it%20is%20a%20beautiful%20country..mp3" },
                { text: "I have to finish this report before the weekend.", audio: GITHUB_BASE + "Dictee-B1%20I%20have%20to%20finish%20this%20report%20before%20the%20weekend..mp3" },
            ],
            B2: [
                { text: "The government must improve the environment", audio: GITHUB_BASE + "Dictee-B2%20The%20government%20must%20improve%20the%20environment..mp3" },
                { text: "Our company specializes in sustainable development.", audio: GITHUB_BASE + "Dictee-B2%20Our%20company%20specializes%20in%20sustainable%20development..mp3" },
                { text: "It is necessary to accommodate all the guests", audio: GITHUB_BASE + "Dictee-B2%20It%20is%20necessary%20to%20accommodate%20all%20the%20guests.mp3" },
                { text: "It is essential to negotiate better terms.", audio: GITHUB_BASE + "Dictee-B2%20It%20is%20essential%20to%20negotiate%20better%20terms..mp3" },
                { text: "She was embarrassed by her sudden mistake", audio: GITHUB_BASE + "Dictee-B2%20She%20was%20embarrassed%20by%20her%20sudden%20mistake..mp3" },
                { text: "The merger will be finalized by next month.", audio: GITHUB_BASE + "Dictee-B2%20The%20merger%20will%20be%20finalized%20by%20next%20month..mp3" },
                { text: "We watched a fascinating documentary last night", audio: GITHUB_BASE + "Dictee-B2%20We%20watched%20a%20fascinating%20documentary%20last%20night.mp3" },
                { text: "We must implement a more efficient strategy.", audio: GITHUB_BASE + "Dictee-B2%20We%20must%20implement%20a%20more%20efficient%20strategy..mp3" },
                { text: "He is a very successful businessman", audio: GITHUB_BASE + "Dictee-B2%20He%20is%20a%20very%20successful%20businessman..mp3" },
                { text: "He was promoted thanks to his leadership skills.", audio: GITHUB_BASE + "Dictee-B2%20He%20was%20promoted%20thanks%20to%20his%20leadership%20skills..mp3" },
            ],
            C1: [
                { text: "The entrepreneur showed great perseverance in his work", audio: GITHUB_BASE + "Dictee-C1%20The%20entrepreneur%20showed%20great%20perseverance%20in%20his%20work.mp3" },
                { text: "The board reached a consensus after long deliberations.", audio: GITHUB_BASE + "Dictee-C1%20The%20board%20reached%20a%20consensus%20after%20long%20deliberations..mp3" },
                { text: "His conscience did not allow him to stay silent", audio: GITHUB_BASE + "Dictee-C1%20His%20conscience%20did%20not%20allow%20him%20to%20stay%20silent..mp3" },
                { text: "Market volatility requires a flexible business model.", audio: GITHUB_BASE + "Dictee-C1%20Market%20volatility%20requires%20a%20flexible%20business%20model..mp3" },
                { text: "There is a strange hierarchy within the organization", audio: GITHUB_BASE + "Dictee-C1%20There%20is%20a%20strange%20hierarchy%20within%20the%20organization..mp3" },
                { text: "We need to leverage our assets to expand.", audio: GITHUB_BASE + "Dictee-C1%20We%20need%20to%20leverage%20our%20assets%20to%20expand..mp3" },
                { text: "She has a very mischievous and witty character", audio: GITHUB_BASE + "Dictee-C1%20She%20has%20a%20very%20mischievous%20and%20witty%20character.mp3" },
                { text: "It is hard to keep up with the constant changes in technology", audio: GITHUB_BASE + "Dictee-C1%20It%20is%20hard%20to%20keep%20up%20with%20the%20constant%20changes%20in%20technology..mp3" },
                { text: "We need to maintain a consistent approach to the project", audio: GITHUB_BASE + "Dictee-C1%20We%20need%20to%20maintain%20a%20consistent%20approach%20to%20the%20project..mp3" },
                { text: "We need to find a way to balance our work and personal life.", audio: GITHUB_BASE + "Dictee-C1%20We%20need%20to%20find%20a%20way%20to%20balance%20our%20work%20and%20personal%20life..mp3" },
            ],
            C2: [
                { text: "The playwright's latest masterpiece was an aesthetic triumph", audio: GITHUB_BASE + "Dictee-C2%20The%20playwright%E2%80%99s%20latest%20masterpiece%20was%20an%20aesthetic%20triumph..mp3" },
                { text: "I was very impressed by how she handled the difficult situation.", audio: GITHUB_BASE + "Dictee-C2%20I%20was%20very%20impressed%20by%20how%20she%20handled%20the%20difficult%20situation..mp3" },
                { text: "Her presence at the committee meeting was a prerequisite", audio: GITHUB_BASE + "Dictee-C2%20Her%20presence%20at%20the%20committee%20meeting%20was%20a%20prerequisite..mp3" },
                { text: "He has a remarkable ability to explain complex ideas simply.", audio: GITHUB_BASE + "Dictee-C2%20He%20has%20a%20remarkable%20ability%20to%20explain%20complex%20ideas%20simply..mp3" },
                { text: "He offered a thorough and conscientious critique of the plan", audio: GITHUB_BASE + "Dictee-C2%20He%20offered%20a%20thorough%20and%20conscientious%20critique%20of%20the%20plan.mp3" },
                { text: "It is a great privilege to work with such talented people.", audio: GITHUB_BASE + "Dictee-C2%20It%20is%20a%20great%20privilege%20to%20work%20with%20such%20talented%20people..mp3" },
                { text: "It is an extraordinary privilege to witness this performance", audio: GITHUB_BASE + "Dictee-C2%20It%20is%20an%20extraordinary%20privilege%20to%20witness%20this%20performance..mp3" },
                { text: "We must ensure that our goals are clear to everyone involved", audio: GITHUB_BASE + "Dictee-C2%20We%20must%20ensure%20that%20our%20goals%20are%20clear%20to%20everyone%20involved..mp3" },
                { text: "The questionnaire was designed to gauge public opinion", audio: GITHUB_BASE + "Dictee-C2%20The%20questionnaire%20was%20designed%20to%20gauge%20public%20opinion..mp3" },
                { text: "Her vast experience makes her a key person in this organization", audio: GITHUB_BASE + "Dictee-C2%20Her%20vast%20experience%20makes%20her%20a%20key%20person%20in%20this%20organization..mp3" },
            ],
        };

        // ── SVG fragments ──
        var svgRetry = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';
        var svgArrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

        // ── State ──
        var currentLevel = 'A1';
        var phraseIndex = 0;
        var status = 'idle';
        var showCorrection = false;
        var shouldAutoPlay = false;
        var correctCount = 0;
        var streakCount = 0;        // consecutive correct (resets on incorrect)
        var levelCorrect = 0;       // correct answers in the current level, out of 10
        var gradePending = false;   // true while the 2s grade overlay is up - blocks re-entry
        var failStreak = 0;
        var cdlStruggleShown = false;
        var pendingNextLevel = null;

        // ── DOM ──
        var el = function (id) { return document.getElementById(id); };
        var levelsEl = el('dictee-levels');
        var progressFill = el('dictee-progressFill');
        var phraseCount = el('dictee-phraseCount');
        var playBtn = el('dictee-playBtn');
        var playIcon = el('dictee-playIcon');
        var soundBars = el('dictee-soundBars');
        var audioErrorEl = el('dictee-audioError');
        var audioErrorLink = el('dictee-audioErrorLink');
        var audio = el('dictee-audio');
        var input = el('dictee-input');
        var iconCorrect = el('dictee-iconCorrect');
        var iconIncorrect = el('dictee-iconIncorrect');
        var feedback = el('dictee-feedback');
        var checkBtn = el('dictee-checkBtn');
        var streakEl = el('dictee-streak');
        var milestoneEl = el('dictee-milestone');
        var gradeOverlay = el('dictee-grade');
        var gradeBadge = el('dictee-grade-badge');
        var gradeScore = el('dictee-grade-score');
        var gradeMsg = el('dictee-grade-msg');

        function normalize(s) {
            return s.toLowerCase().replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ').trim();
        }
        function phrase() { return PHRASES[currentLevel][phraseIndex]; }

        // ── Render ──
        function renderLevels() {
            levelsEl.innerHTML = '';
            LEVELS.forEach(function (lv) {
                var b = document.createElement('button');
                b.className = 'level-btn' + (lv === currentLevel ? ' active' : '');
                b.textContent = 'Niveau ' + lv;
                b.addEventListener('click', function () {
                    currentLevel = lv; phraseIndex = 0; levelCorrect = 0; streakCount = 0; failStreak = 0; resetPhrase(); renderLevels();
                });
                levelsEl.appendChild(b);
            });
        }

        function renderCard() {
            var phrases = PHRASES[currentLevel];
            var p = phrase();
            progressFill.style.width = ((phraseIndex + 1) / phrases.length * 100) + '%';
            phraseCount.textContent = 'Phrase ' + (phraseIndex + 1) + ' sur ' + phrases.length;
            audio.src = p.audio; audio.load();
            audioErrorLink.href = p.audio;
            audioErrorEl.classList.remove('visible');

            playBtn.classList.toggle('playing', status === 'playing');
            playIcon.style.display = status === 'playing' ? 'none' : '';
            soundBars.classList.toggle('sound-bars-hidden', status !== 'playing');

            input.classList.remove('correct', 'incorrect');
            if (status === 'correct') input.classList.add('correct');
            if (status === 'incorrect') input.classList.add('incorrect');
            input.readOnly = status === 'correct';

            iconCorrect.classList.toggle('visible', status === 'correct');
            iconIncorrect.classList.toggle('visible', status === 'incorrect');
            checkBtn.style.display = (status === 'correct' || status === 'incorrect') ? 'none' : '';
            checkBtn.disabled = input.value.trim().length === 0;

            // streak banner (gold) - shows from 3 in a row, disappears on next incorrect
            if (streakCount >= 5) {
                streakEl.textContent = '✦ 5 de suite - vous êtes en feu !';
                streakEl.hidden = false;
            } else if (streakCount >= 3) {
                streakEl.textContent = '✦ 3 de suite !';
                streakEl.hidden = false;
            } else {
                streakEl.hidden = true;
            }

            // milestone tension - on the 9th phrase (index 8) only
            if (phraseIndex === 8) {
                milestoneEl.textContent = 'Plus qu\'une phrase pour terminer le niveau ' + currentLevel + ' !';
                milestoneEl.hidden = false;
            } else {
                milestoneEl.hidden = true;
            }

            renderFeedback();
        }

        function renderFeedback() {
            feedback.innerHTML = '';
            if (status === 'incorrect') {
                var m = document.createElement('p'); m.className = 'msg-incorrect';
                m.textContent = 'Oups ! Il y a une petite erreur.'; feedback.appendChild(m);

                var row = document.createElement('div'); row.className = 'action-row';
                var rb = document.createElement('button'); rb.className = 'action-btn';
                rb.innerHTML = svgRetry + ' Réessayer'; rb.addEventListener('click', retry); row.appendChild(rb);
                var cb = document.createElement('button'); cb.className = 'action-btn muted';
                cb.textContent = showCorrection ? 'Cacher la correction' : 'Voir la correction';
                cb.addEventListener('click', function () { showCorrection = !showCorrection; renderFeedback(); });
                row.appendChild(cb); feedback.appendChild(row);

                var sb = document.createElement('button'); sb.className = 'skip-btn';
                sb.innerHTML = 'Passer à la suite ' + svgArrow;
                sb.addEventListener('click', nextPhrase); feedback.appendChild(sb);

                if (showCorrection) {
                    var c = document.createElement('div'); c.className = 'correction';
                    c.textContent = '“' + phrase().text + '”'; feedback.appendChild(c);
                }
            }
            if (status === 'correct') {
                var p1 = document.createElement('p'); p1.className = 'msg-correct';
                p1.textContent = "Excellent ! C’est correct."; feedback.appendChild(p1);
                var p2 = document.createElement('p'); p2.className = 'msg-correct-sub';
                p2.textContent = 'Appuyez sur Entrée pour continuer'; feedback.appendChild(p2);
                var nb = document.createElement('button'); nb.className = 'next-btn';
                nb.innerHTML = 'Phrase suivante ' + svgArrow;
                nb.addEventListener('click', nextPhrase); feedback.appendChild(nb);
            }
        }

        // ── Actions ──
        function resetPhrase() {
            status = 'idle'; showCorrection = false;
            input.value = ''; input.readOnly = false;
            renderLevels(); renderCard(); input.focus();
        }

        function playAudio() {
            audioErrorEl.classList.remove('visible');
            audio.currentTime = 0;
            audio.play().catch(function () { audioErrorEl.classList.add('visible'); status = 'idle'; renderCard(); });
            status = 'playing';
            playBtn.classList.add('playing'); playIcon.style.display = 'none';
            soundBars.classList.remove('sound-bars-hidden');
        }

        function checkAnswer() {
            if (normalize(input.value) === normalize(phrase().text)) {
                status = 'correct';
                correctCount++;
                levelCorrect++;
                streakCount++;
                failStreak = 0;
            } else {
                status = 'incorrect';
                streakCount = 0;
                failStreak++;
                if (failStreak >= 3 && !cdlStruggleShown && !CDLTools.hasSubmitted()) {
                    cdlStruggleShown = true;
                    CDLTools.openModal({ toolId: 'dictee', trigger: 'struggle', segment: currentLevel, level: currentLevel, score: correctCount, dismissLabel: 'Non merci, continuer' });
                }
            }
            renderCard();
        }

        // Earned-form flow: full-screen grade card for 2s, slide up, then open the form.
        function showGradeThenForm(level, score, openForm) {
            var cefr = (window.CDLTools && CDLTools._cefr && CDLTools._cefr[level]) || { bg: '#1ABC9C', fg: '#FFFFFF' };
            gradeBadge.textContent = 'Niveau ' + level;
            gradeBadge.style.background = cefr.bg;
            gradeBadge.style.color = cefr.fg;
            gradeScore.textContent = score + ' / 10';
            gradeMsg.textContent = score >= 8 ? ('Votre compréhension de l\'anglais à l\'oral en ' + level + ' est solide.')
                : score >= 5 ? ('Votre compréhension de l\'anglais à l\'oral en ' + level + ' progresse.')
                : ('Votre oreille en ' + level + ' a encore besoin d\'entraînement.');
            gradeOverlay.classList.remove('slide-up');
            gradeOverlay.hidden = false;
            setTimeout(function () {
                gradeOverlay.classList.add('slide-up');          // 0.3s slide-up transition
                setTimeout(function () {
                    gradeOverlay.hidden = true;
                    gradeOverlay.classList.remove('slide-up');
                    openForm();
                }, 320);
            }, 2000);
        }

        function nextPhrase() {
            if (gradePending) return;   // ignore input (Enter / re-click) while the grade overlay is up
            var phrases = PHRASES[currentLevel];
            failStreak = 0;
            if (phraseIndex < phrases.length - 1) {
                phraseIndex++;
                shouldAutoPlay = true; resetPhrase(); renderLevels();
            } else {
                var ni = LEVELS.indexOf(currentLevel) + 1;
                var completedLevel = currentLevel;
                var lc = levelCorrect;   // score out of 10 for the completed level
                if (!CDLTools.hasSubmitted()) {
                    pendingNextLevel = (ni < LEVELS.length) ? LEVELS[ni] : null;
                    if (pendingNextLevel === null) { currentLevel = 'A1'; phraseIndex = 0; }
                    var isWinEnd = (completedLevel === 'C2');
                    if (isWinEnd && window.CDLTools && CDLTools.track) CDLTools.track('tool_complete', { tool: 'dictee', category: 'game', value: lc });
                    gradePending = true;   // block re-entry until the form opens / level advances
                    showGradeThenForm(completedLevel, lc, function () {
                        var perfect = (lc >= 10);  // sans-faute = perfect 10/10
                        CDLTools.openModal({
                            toolId: 'dictee', trigger: 'win', segment: completedLevel, level: completedLevel, score: lc,
                            title: perfect ? 'Félicitations pour ce sans-faute !'
                                           : ('Vous avez obtenu ' + lc + ' sur 10 au niveau ' + completedLevel + '.'),
                            text: perfect ? 'Pour aller plus loin et tester votre fluidité à l\'oral, planifiez votre bilan pédagogique offert.'
                                          : undefined,
                            dismissLabel: isWinEnd ? 'Non merci, rejouer' : 'Non merci, continuer',
                            successLabel: isWinEnd ? 'Rejouer' : 'Continuer'
                        });
                    });
                } else {
                    if (ni < LEVELS.length) { currentLevel = LEVELS[ni]; phraseIndex = 0; }
                    else { currentLevel = 'A1'; phraseIndex = 0; }
                    levelCorrect = 0; streakCount = 0; failStreak = 0;
                    shouldAutoPlay = true; resetPhrase(); renderLevels();
                }
            }
        }

        function retry() {
            input.value = ''; status = 'idle'; showCorrection = false; renderCard(); input.focus();
        }

        // ── Events ──
        checkBtn.addEventListener('click', checkAnswer);
        playBtn.addEventListener('click', playAudio);
        audio.addEventListener('ended', function () {
            status = 'idle'; playBtn.classList.remove('playing');
            playIcon.style.display = ''; soundBars.classList.add('sound-bars-hidden');
        });
        audio.addEventListener('canplay', function () {
            if (shouldAutoPlay) { shouldAutoPlay = false; playAudio(); }
        });
        audio.addEventListener('error', function () {
            audioErrorEl.classList.add('visible'); status = 'idle';
            playBtn.classList.remove('playing'); playIcon.style.display = '';
            soundBars.classList.add('sound-bars-hidden');
        });
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') { if (status === 'correct') nextPhrase(); else checkAnswer(); }
        });
        input.addEventListener('input', function () {
            if (status === 'idle') { renderFeedback(); checkBtn.disabled = input.value.trim().length === 0; }
        });

        // ── Init ──
        renderLevels(); renderCard(); input.focus();
        if (window.CDLTools && CDLTools.track) CDLTools.track('tool_start', { tool: 'dictee', category: 'game' });

        window.resetDictee = function () {
            currentLevel = 'A1';
            phraseIndex = 0;
            status = 'idle';
            showCorrection = false;
            shouldAutoPlay = false;
            correctCount = 0;
            streakCount = 0;
            levelCorrect = 0;
            failStreak = 0;
            gradePending = false;
            renderLevels();
            resetPhrase();
        };

        window.advanceDictee = function (level) {
            currentLevel = level;
            phraseIndex = 0;
            status = 'idle';
            showCorrection = false;
            shouldAutoPlay = false;
            levelCorrect = 0;   // fresh per-level score for the new level
            streakCount = 0;
            failStreak = 0;
            gradePending = false;
            renderLevels();
            resetPhrase();
        };

        // ── Lead capture via shared module (cdl-tools.js) ──
        // Copy is final and charter-compliant (vouvoiement, "conseiller pédagogique",
        // hyphens only). Bénédicte can edit any block in place below.
        CDLTools.register({
            toolId: 'dictee',
            portalId: '6034125',
            formId: '71b010ce-dc05-47ce-88c4-130674855dae',
            hiddenFields: { outil_source: 'dictee' },
            cta: 'Réserver mon bilan offert',
            onClose: function (ctx) {
                if (ctx.trigger === 'struggle') return;            // stay on the current phrase
                if (pendingNextLevel) { window.advanceDictee(pendingNextLevel); pendingNextLevel = null; }
                else { window.resetDictee(); }
            },
            copy: {
                struggle: {
                    A1: { title: "L'anglais à l'oreille, ça s'entraîne.", text: "Votre oreille n'est pas encore calibrée - c'est tout. Un conseiller pédagogique peut faire le point avec vous et vous orienter rapidement. Laissez votre numéro, nous vous rappelons." },
                    A2: { title: "En anglais parlé, les mots se collent les uns aux autres d'une façon que le français ne vous a pas préparé à entendre.", text: "Un conseiller pédagogique peut entraîner votre oreille sur exactement ça. Laissez votre contact, nous vous rappelons." },
                    B1: { title: "Au B1, l'oreille et la tête travaillent en même temps. C'est là que la plupart craquent.", text: "C'est de la pratique, pas du niveau. Un conseiller pédagogique vous en sort vite. Laissez votre numéro, nous vous rappelons." },
                    B2: { title: "B2, même les bons apprenants butent.", text: "Les structures sont longues, le rythme est rapide, et il faut tout tenir en tête. Le fait que vous soyez là, ça compte. Un conseiller pédagogique cible exactement ce qui vous échappe. Laissez votre numéro." },
                    C1: { title: "C1 à l'oreille, même des locuteurs avancés galèrent. Ce n'est pas un échec, c'est un indicateur de précision.", text: "Un conseiller pédagogique travaille exactement sur ça. Laissez votre numéro, nous vous rappelons." },
                    C2: { title: "C2, c'est le niveau des quasi-natifs. Rater ici ne dit rien de votre anglais - ça dit que vous visez haut.", text: "Un conseiller pédagogique peut vous montrer ce qui manque. Laissez votre numéro, nous vous rappelons." }
                },
                win: {
                    A1: { title: "Même au niveau A1, l'anglais à l'oreille c'est pas si évident. Vous venez de le faire.", text: "Un de nos conseillers pédagogiques peut vous montrer comment ça sonne pour vous à l'oral. Laissez votre numéro, nous vous rappelons." },
                    A2: { title: "A2, c'est là où la plupart des gens réalisent qu'ils sont moins mauvais qu'ils croyaient. Vous en êtes la preuve.", text: "Un conseiller pédagogique peut évaluer où vous en êtes vraiment. Laissez votre contact, nous vous rappelons pour 20 minutes." },
                    B1: { title: "B1. Vous n'êtes officiellement plus débutant. La majorité des Français ne franchissent jamais ce cap.", text: "Un conseiller pédagogique peut vous dire exactement ce qui vous sépare encore du B2. Laissez votre numéro, nous vous rappelons." },
                    B2: { title: "B2 à l'oreille, ça se mérite. C'est le niveau exigé dans la plupart des entreprises internationales.", text: "Vous voulez savoir où vous vous positionnez exactement ? Laissez votre numéro, un conseiller pédagogique vous rappelle pour en parler." },
                    C1: { title: "C1. Vous êtes dans les 12% qui y arrivent. À ce niveau ce qui bloque c'est rarement le vocabulaire, c'est la spontanéité.", text: "Un conseiller pédagogique peut identifier ça en une conversation. Laissez votre numéro, nous vous rappelons." },
                    C2: { title: "C2. Vous entendez l'anglais comme une langue, pas comme un code à déchiffrer.", text: "Ce niveau-là, on peut en faire quelque chose de concret. Un conseiller pédagogique vous rappelle pour vous montrer quoi. Laissez votre numéro." }
                }
            }
        });
    })();
})();
