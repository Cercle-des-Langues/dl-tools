/* dictee.js - CDL Dictee self-mounting widget. Mounts into #cdl-dictee. Needs cdl-tools.js. Generated; rebuild from dictee_widget.html. */
(function(){"use strict";if(window.__cdlDicteeMounted)return;window.__cdlDicteeMounted=true;
function u8(b){var s=atob(b),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return new TextDecoder('utf-8').decode(a);}
var mount=document.getElementById('cdl-dictee');if(!mount){mount=document.createElement('div');mount.id='cdl-dictee';document.body.appendChild(mount);}
mount.style.display='block';mount.style.width='100%';mount.style.maxWidth='800px';mount.style.margin='0 auto';
mount.innerHTML=u8("PHN0eWxlPgogICAgLmRpY3RlZS1hcHAgKiwKICAgIC5kaWN0ZWUtYXBwICo6OmJlZm9yZSwKICAgIC5kaWN0ZWUtYXBwICo6OmFmdGVyIHsKICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OwogICAgICAgIG1hcmdpbjogMDsKICAgICAgICBwYWRkaW5nOiAwOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIHsKICAgICAgICAtLW5hdnk6ICMyNjMyMzg7CiAgICAgICAgLS1nb2xkOiAjZmZjNDAwOwogICAgICAgIC0tZ3JlZW46ICMxYWJjOWM7CiAgICAgICAgLS1jcmVhbTogI2ZkZmJmNzsKICAgICAgICAtLXdoaXRlOiAjZmZmZmZmOwogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICAgICAgY29sb3I6IHZhcigtLW5hdnkpOwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgfQoKICAgIC8qIOKUgOKUgCBMZXZlbCBzZWxlY3RvciDilIDilIAgKi8KICAgIC5kaWN0ZWUtYXBwIC5sZXZlbHMgewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGdhcDogMC41cmVtOwogICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmxldmVsLWJ0biB7CiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuMnJlbTsKICAgICAgICBtaW4taGVpZ2h0OiA0NHB4OwogICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4OwogICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMzgsIDUwLCA1NiwgMC4xNSk7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpOwogICAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTsKICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7CiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAubGV2ZWwtYnRuOmhvdmVyIHsKICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMzgsIDUwLCA1NiwgMC40KTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAubGV2ZWwtYnRuLmFjdGl2ZSB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmF2eSk7CiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTsKICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLW5hdnkpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNnB4IHJnYmEoMzgsIDUwLCA1NiwgMC4xNik7CiAgICB9CgogICAgLyog4pSA4pSAIENhcmQg4pSA4pSAICovCiAgICAuZGljdGVlLWFwcCAuY2FyZCB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgbWF4LXdpZHRoOiA0OHJlbTsKICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7CiAgICAgICAgYm9yZGVyLXJhZGl1czogMS41cmVtOwogICAgICAgIGJveC1zaGFkb3c6IDAgMCAyNHB4IHJnYmEoMzgsIDUwLCA1NiwgMC4xMik7CiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzOCwgNTAsIDU2LCAwLjA0KTsKICAgICAgICBwYWRkaW5nOiAyLjVyZW0gMnJlbTsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgIH0KCiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsKICAgICAgICAuZGljdGVlLWFwcCAuY2FyZCB7CiAgICAgICAgICAgIHBhZGRpbmc6IDNyZW07CiAgICAgICAgfQogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5wcm9ncmVzcy10cmFjayB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogMDsKICAgICAgICBsZWZ0OiAwOwogICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIGhlaWdodDogNHB4OwogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzgsIDUwLCA1NiwgMC4wNCk7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLnByb2dyZXNzLWZpbGwgewogICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nb2xkKTsKICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7CiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmNhcmQtaGVhZGVyIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07CiAgICAgICAgZmxleC13cmFwOiB3cmFwOwogICAgICAgIGdhcDogMC41cmVtOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5waHJhc2UtY291bnQgewogICAgICAgIGNvbG9yOiB2YXIoLS1nb2xkKTsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAubGlzdGVuLWxhYmVsIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZ2FwOiAwLjRyZW07CiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtOwogICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAubGlzdGVuLWxhYmVsIHN2ZyB7CiAgICAgICAgd2lkdGg6IDE2cHg7CiAgICAgICAgaGVpZ2h0OiAxNnB4OwogICAgfQoKICAgIC8qIOKUgOKUgCBQbGF5IGJ1dHRvbiDilIDilIAgKi8KICAgIC5kaWN0ZWUtYXBwIC5wbGF5LWFyZWEgewogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGdhcDogMXJlbTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5wbGF5LWJ0biB7CiAgICAgICAgd2lkdGg6IDZyZW07CiAgICAgICAgaGVpZ2h0OiA2cmVtOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMCAyNHB4IHJnYmEoMzgsIDUwLCA1NiwgMC4xMik7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pOwogICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7CiAgICB9CgogICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkgewogICAgLmRpY3RlZS1hcHAgLnBsYXktYnRuOmhvdmVyIHsKICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMCAyOHB4IHJnYmEoMzgsIDUwLCA1NiwgMC4xNik7CiAgICB9CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLnBsYXktYnRuOmFjdGl2ZSB7CiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAucGxheS1idG4ucGxheWluZyB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ29sZCk7CiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMCAyNHB4IHJnYmEoMzgsIDUwLCA1NiwgMC4xNCk7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLnBsYXktYnRuIHN2ZyB7CiAgICAgICAgd2lkdGg6IDQwcHg7CiAgICAgICAgaGVpZ2h0OiA0MHB4OwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5zb3VuZC1iYXJzIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGdhcDogM3B4OwogICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsKICAgICAgICBoZWlnaHQ6IDJyZW07CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLnNvdW5kLWJhciB7CiAgICAgICAgd2lkdGg6IDVweDsKICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7CiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7CiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7CiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLnNvdW5kLWJhcjpudGgtY2hpbGQoMSkgewogICAgICAgIGFuaW1hdGlvbjogZGljdGVlLWJhcjEgMC41cyBpbmZpbml0ZTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuc291bmQtYmFyOm50aC1jaGlsZCgyKSB7CiAgICAgICAgYW5pbWF0aW9uOiBkaWN0ZWUtYmFyMiAwLjZzIGluZmluaXRlOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5zb3VuZC1iYXI6bnRoLWNoaWxkKDMpIHsKICAgICAgICBhbmltYXRpb246IGRpY3RlZS1iYXIzIDAuNHMgaW5maW5pdGU7CiAgICB9CgogICAgQGtleWZyYW1lcyBkaWN0ZWUtYmFyMSB7CgogICAgICAgIDAlLAogICAgICAgIDEwMCUgewogICAgICAgICAgICBoZWlnaHQ6IDEwcHg7CiAgICAgICAgfQoKICAgICAgICA1MCUgewogICAgICAgICAgICBoZWlnaHQ6IDMwcHg7CiAgICAgICAgfQogICAgfQoKICAgIEBrZXlmcmFtZXMgZGljdGVlLWJhcjIgewoKICAgICAgICAwJSwKICAgICAgICAxMDAlIHsKICAgICAgICAgICAgaGVpZ2h0OiAyMHB4OwogICAgICAgIH0KCiAgICAgICAgNTAlIHsKICAgICAgICAgICAgaGVpZ2h0OiAxMHB4OwogICAgICAgIH0KICAgIH0KCiAgICBAa2V5ZnJhbWVzIGRpY3RlZS1iYXIzIHsKCiAgICAgICAgMCUsCiAgICAgICAgMTAwJSB7CiAgICAgICAgICAgIGhlaWdodDogMTVweDsKICAgICAgICB9CgogICAgICAgIDUwJSB7CiAgICAgICAgICAgIGhlaWdodDogMjVweDsKICAgICAgICB9CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLnNvdW5kLWJhcnMtaGlkZGVuIHsKICAgICAgICBkaXNwbGF5OiBub25lOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5hdWRpby1lcnJvciB7CiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgIGRpc3BsYXk6IG5vbmU7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmF1ZGlvLWVycm9yLnZpc2libGUgewogICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5hdWRpby1lcnJvciBwIHsKICAgICAgICBjb2xvcjogI0M1MjgzRDsKICAgICAgICBmb250LXNpemU6IDAuODVyZW07CiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuYXVkaW8tZXJyb3IgYSB7CiAgICAgICAgY29sb3I6IHJnYmEoMzgsIDUwLCA1NiwgMC41KTsKICAgICAgICBmb250LXNpemU6IDAuNzVyZW07CiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmF1ZGlvLWVycm9yIGE6aG92ZXIgewogICAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTsKICAgIH0KCiAgICAvKiDilIDilIAgSW5wdXQg4pSA4pSAICovCiAgICAuZGljdGVlLWFwcCAuaW5wdXQtYXJlYSB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmlucHV0LXdyYXBwZXIgewogICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5kaWN0ZWUtaW5wdXQgewogICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUzLCAyNTEsIDI0NywgMC41KTsKICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDM4LCA1MCwgNTYsIDAuMDgpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07CiAgICAgICAgcGFkZGluZzogMXJlbSAzLjVyZW0gMXJlbSAxLjVyZW07CiAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtOwogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICAgICAgY29sb3I6IHZhcigtLW5hdnkpOwogICAgICAgIG91dGxpbmU6IG5vbmU7CiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmRpY3RlZS1pbnB1dDo6cGxhY2Vob2xkZXIgewogICAgICAgIGNvbG9yOiByZ2JhKDM4LCA1MCwgNTYsIDAuMyk7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmRpY3RlZS1pbnB1dDpmb2N1cyB7CiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nb2xkKTsKICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNiwgMTg4LCAxNTYsIDAuMTgpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5kaWN0ZWUtaW5wdXQuY29ycmVjdCB7CiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMUFCQzlDOwogICAgICAgIGJhY2tncm91bmQ6ICNFMEY2RjE7CiAgICAgICAgY29sb3I6ICMwQTZCNUE7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmRpY3RlZS1pbnB1dC5pbmNvcnJlY3QgewogICAgICAgIGJvcmRlci1jb2xvcjogI0M1MjgzRDsKICAgICAgICBiYWNrZ3JvdW5kOiAjRkJDREQ0OwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5pbnB1dC1pY29uIHsKICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgcmlnaHQ6IDFyZW07CiAgICAgICAgdG9wOiA1MCU7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOwogICAgICAgIGRpc3BsYXk6IG5vbmU7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmlucHV0LWljb24udmlzaWJsZSB7CiAgICAgICAgZGlzcGxheTogYmxvY2s7CiAgICAgICAgYW5pbWF0aW9uOiBkaWN0ZWUtcG9wSW4gMC4zcyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmlucHV0LWljb24gc3ZnIHsKICAgICAgICB3aWR0aDogMjhweDsKICAgICAgICBoZWlnaHQ6IDI4cHg7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmlucHV0LWljb24uY29ycmVjdC1pY29uIHN2ZyB7CiAgICAgICAgY29sb3I6ICMxQUJDOUM7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmlucHV0LWljb24uaW5jb3JyZWN0LWljb24gc3ZnIHsKICAgICAgICBjb2xvcjogI0M1MjgzRDsKICAgIH0KCiAgICBAa2V5ZnJhbWVzIGRpY3RlZS1wb3BJbiB7CiAgICAgICAgMCUgewogICAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC41KTsKICAgICAgICB9CgogICAgICAgIDEwMCUgewogICAgICAgICAgICBvcGFjaXR5OiAxOwogICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMSk7CiAgICAgICAgfQogICAgfQoKICAgIC8qIOKUgOKUgCBGZWVkYmFjayDilIDilIAgKi8KICAgIC5kaWN0ZWUtYXBwIC5mZWVkYmFjayB7CiAgICAgICAgbWluLWhlaWdodDogODBweDsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBnYXA6IDFyZW07CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmZlZWRiYWNrPiogewogICAgICAgIGFuaW1hdGlvbjogZGljdGVlLWZhZGVVcCAwLjNzIGVhc2U7CiAgICB9CgogICAgQGtleWZyYW1lcyBkaWN0ZWUtZmFkZVVwIHsKICAgICAgICAwJSB7CiAgICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpOwogICAgICAgIH0KCiAgICAgICAgMTAwJSB7CiAgICAgICAgICAgIG9wYWNpdHk6IDE7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsKICAgICAgICB9CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLm1zZy1jb3JyZWN0IHsKICAgICAgICBjb2xvcjogIzE1OTY3RDsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5tc2ctY29ycmVjdC1zdWIgewogICAgICAgIGNvbG9yOiByZ2JhKDIxLCAxNTAsIDEyNSwgMC41NSk7CiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtOwogICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7CiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5tc2ctaW5jb3JyZWN0IHsKICAgICAgICBjb2xvcjogI0M1MjgzRDsKICAgICAgICBmb250LXdlaWdodDogNTAwOwogICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuYWN0aW9uLXJvdyB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBnYXA6IDEuNXJlbTsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGZsZXgtd3JhcDogd3JhcDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuYWN0aW9uLWJ0biB7CiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBnYXA6IDAuNHJlbTsKICAgICAgICBwYWRkaW5nOiAxMHB4IDZweDsKICAgICAgICBtaW4taGVpZ2h0OiA0NHB4OwogICAgICAgIGZvbnQtc2l6ZTogMC44cmVtOwogICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7CiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsKICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07CiAgICAgICAgYm9yZGVyOiBub25lOwogICAgICAgIGJhY2tncm91bmQ6IG5vbmU7CiAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yczsKICAgICAgICBjb2xvcjogdmFyKC0tbmF2eSk7CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmFjdGlvbi1idG46aG92ZXIgewogICAgICAgIGNvbG9yOiB2YXIoLS1nb2xkKTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuYWN0aW9uLWJ0bi5tdXRlZCB7CiAgICAgICAgY29sb3I6IHJnYmEoMzgsIDUwLCA1NiwgMC41KTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuYWN0aW9uLWJ0bi5tdXRlZDpob3ZlciB7CiAgICAgICAgY29sb3I6IHZhcigtLW5hdnkpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5hY3Rpb24tYnRuIHN2ZyB7CiAgICAgICAgd2lkdGg6IDE1cHg7CiAgICAgICAgaGVpZ2h0OiAxNXB4OwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5za2lwLWJ0biB7CiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtOwogICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZ2FwOiAwLjRyZW07CiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07CiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07CiAgICAgICAgYm9yZGVyOiBub25lOwogICAgICAgIGJhY2tncm91bmQ6IG5vbmU7CiAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICAgICAgY29sb3I6IHJnYmEoMzgsIDUwLCA1NiwgMC40KTsKICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzOCwgNTAsIDU2LCAwLjE1KTsKICAgICAgICBwYWRkaW5nOiAxMHB4IDZweCA4cHg7CiAgICAgICAgbWluLWhlaWdodDogNDRweDsKICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5za2lwLWJ0bjpob3ZlciB7CiAgICAgICAgY29sb3I6IHZhcigtLW5hdnkpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5za2lwLWJ0biBzdmcgewogICAgICAgIHdpZHRoOiAxNHB4OwogICAgICAgIGhlaWdodDogMTRweDsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuY29ycmVjdGlvbiB7CiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07CiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzOCwgNTAsIDU2LCAwLjA0KTsKICAgICAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtOwogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljOwogICAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTsKICAgICAgICBjb2xvcjogdmFyKC0tbmF2eSk7CiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5uZXh0LWJ0biB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbmF2eSk7CiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTsKICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDJyZW07CiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7CiAgICAgICAgYm9yZGVyOiBub25lOwogICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7CiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtOwogICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAgIGdhcDogMC41cmVtOwogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgzOCwgNTAsIDU2LCAwLjE0KTsKICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yczsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAubmV4dC1idG46aG92ZXIgewogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzgsIDUwLCA1NiwgMC44NSk7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDI2cHggcmdiYSgzOCwgNTAsIDU2LCAwLjE2KTsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAubmV4dC1idG46YWN0aXZlIHsKICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTYpOwogICAgfQoKICAgIC5kaWN0ZWUtYXBwIC5uZXh0LWJ0biBzdmcgewogICAgICAgIHdpZHRoOiAyMHB4OwogICAgICAgIGhlaWdodDogMjBweDsKICAgIH0KCiAgICAuZGljdGVlLWFwcCAuaGludC10ZXh0IHsKICAgICAgICBjb2xvcjogcmdiYSgzOCwgNTAsIDU2LCAwLjM1KTsKICAgICAgICBmb250LXNpemU6IDAuOHJlbTsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTsKICAgICAgICBkaXNwbGF5OiBub25lOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgZ2FwOiAwLjRyZW07CiAgICB9CgogICAgLmRpY3RlZS1hcHAgLmhpbnQtdGV4dC52aXNpYmxlIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgfQoKICAgIC8qIOKUgOKUgCBWw6lyaWZpZXIgYnV0dG9uIOKUgOKUgCAqLwogICAgLmRpY3RlZS1hcHAgLnZlcmlmeS1idG4gewogICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIG1hcmdpbi10b3A6IDFyZW07CiAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgIHBhZGRpbmc6IDAuODVyZW0gMS41cmVtOwogICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdvbGQpOwogICAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7CiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsKICAgICAgICBmb250LXNpemU6IDAuOTVyZW07CiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtOwogICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMzgsIDUwLCA1NiwgMC4xMik7CiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7CiAgICB9CiAgICAuZGljdGVlLWFwcCAudmVyaWZ5LWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7CiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTYpOwogICAgICAgIGJveC1zaGFkb3c6IDAgMCAyNnB4IHJnYmEoMzgsIDUwLCA1NiwgMC4xNik7CiAgICB9CiAgICAuZGljdGVlLWFwcCAudmVyaWZ5LWJ0bjphY3RpdmU6bm90KDpkaXNhYmxlZCkgewogICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7CiAgICB9CiAgICAuZGljdGVlLWFwcCAudmVyaWZ5LWJ0bjpkaXNhYmxlZCB7CiAgICAgICAgb3BhY2l0eTogMC40OwogICAgICAgIGN1cnNvcjogZGVmYXVsdDsKICAgICAgICBib3gtc2hhZG93OiBub25lOwogICAgfQoKICAgIC8qIOKUgOKUgCBTdHJlYWsgYmFubmVyIOKUgOKUgCAqLwogICAgLmRpY3RlZS1hcHAgLnN0cmVhay1iYW5uZXIgewogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgICBmb250LXNpemU6IDE0cHg7CiAgICAgICAgY29sb3I6ICNGRkM0MDA7CiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07CiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTsKICAgIH0KCiAgICAvKiDilIDilIAgTWlsZXN0b25lIHRlbnNpb24gbGluZSDilIDilIAgKi8KICAgIC5kaWN0ZWUtYXBwIC5taWxlc3RvbmUtbGluZSB7CiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMTNweDsKICAgICAgICBjb2xvcjogIzFBQkM5QzsKICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwOwogICAgfQoKICAgIC8qIOKUgOKUgCBQZXJmb3JtYW5jZSBncmFkZSBvdmVybGF5IOKUgOKUgCAqLwogICAgLyogW2hpZGRlbl0gbXVzdCBiZWF0IHRoZSBkaXNwbGF5IHJ1bGVzIGJlbG93LCBvciB0aGUgb3ZlcmxheSBzaG93cyBlbXB0eSBvbiBsb2FkLiAqLwogICAgLmRpY3RlZS1hcHAgW2hpZGRlbl0geyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH0KCiAgICAuZGljdGVlLWFwcCAuZ3JhZGUtb3ZlcmxheSB7CiAgICAgICAgcG9zaXRpb246IGZpeGVkOwogICAgICAgIHRvcDogMDsKICAgICAgICByaWdodDogMDsKICAgICAgICBib3R0b206IDA7CiAgICAgICAgbGVmdDogMDsKICAgICAgICB6LWluZGV4OiA5OTk4OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBwYWRkaW5nOiAyMHB4OwogICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzgsIDUwLCA1NiwgMC41NSk7CiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTsKICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTsKICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOwogICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlOwogICAgfQogICAgLmRpY3RlZS1hcHAgLmdyYWRlLW92ZXJsYXkuc2xpZGUtdXAgewogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7CiAgICAgICAgb3BhY2l0eTogMDsKICAgIH0KICAgIC5kaWN0ZWUtYXBwIC5ncmFkZS1jYXJkIHsKICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7CiAgICAgICAgcGFkZGluZzogMzJweCAyOHB4OwogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBib3gtc2hhZG93OiAwIDAgMjRweCByZ2JhKDM4LCA1MCwgNTYsIDAuMTUpOwogICAgICAgIG1heC13aWR0aDogMzYwcHg7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgYW5pbWF0aW9uOiBkaWN0ZWUtZmFkZVVwIDAuM3MgZWFzZTsKICAgIH0KICAgIC5kaWN0ZWUtYXBwIC5ncmFkZS1iYWRnZSB7CiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOwogICAgICAgIHBhZGRpbmc6IDVweCAxNHB4OwogICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7CiAgICAgICAgZm9udC1zaXplOiAwLjcycmVtOwogICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7CiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTsKICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7CiAgICB9CiAgICAuZGljdGVlLWFwcCAuZ3JhZGUtc2NvcmUgewogICAgICAgIGZvbnQtc2l6ZTogM3JlbTsKICAgICAgICBmb250LXdlaWdodDogODAwOwogICAgICAgIGNvbG9yOiAjMjYzMjM4OwogICAgICAgIGxpbmUtaGVpZ2h0OiAxOwogICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7CiAgICB9CiAgICAuZGljdGVlLWFwcCAuZ3JhZGUtbXNnIHsKICAgICAgICBmb250LXNpemU6IDFyZW07CiAgICAgICAgY29sb3I6ICMyNjMyMzg7CiAgICAgICAgb3BhY2l0eTogMC44NTsKICAgICAgICBtYXJnaW46IDA7CiAgICB9Cjwvc3R5bGU+Cgo8ZGl2IGNsYXNzPSJkaWN0ZWUtYXBwIiBpZD0iZGljdGVlQXBwIj4KICAgIDxkaXYgY2xhc3M9ImxldmVscyIgaWQ9ImRpY3RlZS1sZXZlbHMiPjwvZGl2PgogICAgPGRpdiBjbGFzcz0ic3RyZWFrLWJhbm5lciIgaWQ9ImRpY3RlZS1zdHJlYWsiIGhpZGRlbj48L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJjYXJkIj4KICAgICAgICA8ZGl2IGNsYXNzPSJwcm9ncmVzcy10cmFjayI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InByb2dyZXNzLWZpbGwiIGlkPSJkaWN0ZWUtcHJvZ3Jlc3NGaWxsIj48L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJtaWxlc3RvbmUtbGluZSIgaWQ9ImRpY3RlZS1taWxlc3RvbmUiIGhpZGRlbj48L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY2FyZC1oZWFkZXIiPgogICAgICAgICAgICA8c3BhbiBjbGFzcz0icGhyYXNlLWNvdW50IiBpZD0iZGljdGVlLXBocmFzZUNvdW50Ij48L3NwYW4+CiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJsaXN0ZW4tbGFiZWwiPgogICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9IjExIDUgNiA5IDIgOSAyIDE1IDYgMTUgMTEgMTkgMTEgNSIgLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuNTQgOC40NmE1IDUgMCAwIDEgMCA3LjA3IiAvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS4wNyA0LjkzYTEwIDEwIDAgMCAxIDAgMTQuMTQiIC8+CiAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgICAgIMOJY291dGV6IGF0dGVudGl2ZW1lbnQKICAgICAgICAgICAgPC9zcGFuPgogICAgICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJwbGF5LWFyZWEiPgogICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJwbGF5LWJ0biIgaWQ9ImRpY3RlZS1wbGF5QnRuIj4KICAgICAgICAgICAgICAgIDxzdmcgaWQ9ImRpY3RlZS1wbGF5SWNvbiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0ibm9uZSI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSI1IDMgMTkgMTIgNSAyMSA1IDMiIC8+CiAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNvdW5kLWJhcnMgc291bmQtYmFycy1oaWRkZW4iIGlkPSJkaWN0ZWUtc291bmRCYXJzIj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzb3VuZC1iYXIiPjwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNvdW5kLWJhciI+PC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic291bmQtYmFyIj48L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYXVkaW8tZXJyb3IiIGlkPSJkaWN0ZWUtYXVkaW9FcnJvciI+CiAgICAgICAgICAgICAgICA8cD5FcnJldXIgOiBGaWNoaWVyIGF1ZGlvIGludHJvdXZhYmxlIG91IGluYWNjZXNzaWJsZS48L3A+CiAgICAgICAgICAgICAgICA8YSBpZD0iZGljdGVlLWF1ZGlvRXJyb3JMaW5rIiBocmVmPSIjIiB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIj5UZXN0ZXIgbCdhY2PDqHMKICAgICAgICAgICAgICAgICAgICBkaXJlY3Q8L2E+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgoKICAgICAgICA8YXVkaW8gaWQ9ImRpY3RlZS1hdWRpbyIgcHJlbG9hZD0iYXV0byIgc3R5bGU9ImRpc3BsYXk6bm9uZSI+PC9hdWRpbz4KCiAgICAgICAgPGRpdiBjbGFzcz0iaW5wdXQtYXJlYSI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImlucHV0LXdyYXBwZXIiPgogICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJkaWN0ZWUtaW5wdXQiIGNsYXNzPSJkaWN0ZWUtaW5wdXQiIHBsYWNlaG9sZGVyPSLDiWNyaXZleiBsYSBwaHJhc2UgaWNpLi4uIgogICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0ib2ZmIiAvPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iaW5wdXQtaWNvbiBjb3JyZWN0LWljb24iIGlkPSJkaWN0ZWUtaWNvbkNvcnJlY3QiPgogICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjIgMTEuMDhWMTJhMTAgMTAgMCAxIDEtNS45My05LjE0IiAvPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPSIyMiA0IDEyIDE0LjAxIDkgMTEuMDEiIC8+CiAgICAgICAgICAgICAgICAgICAgPC9zdmc+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImlucHV0LWljb24gaW5jb3JyZWN0LWljb24iIGlkPSJkaWN0ZWUtaWNvbkluY29ycmVjdCI+CiAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiAvPgogICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iMTUiIHkxPSI5IiB4Mj0iOSIgeTI9IjE1IiAvPgogICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iOSIgeTE9IjkiIHgyPSIxNSIgeTI9IjE1IiAvPgogICAgICAgICAgICAgICAgICAgIDwvc3ZnPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgPGRpdiBjbGFzcz0iZmVlZGJhY2siIGlkPSJkaWN0ZWUtZmVlZGJhY2siPjwvZGl2PgogICAgICAgICAgICA8YnV0dG9uIGlkPSJkaWN0ZWUtY2hlY2tCdG4iIGNsYXNzPSJ2ZXJpZnktYnRuIiBkaXNhYmxlZD5Ww6lyaWZpZXI8L2J1dHRvbj4KICAgICAgICA8L2Rpdj4KICAgIDwvZGl2PgoKICAgIDxkaXYgY2xhc3M9ImdyYWRlLW92ZXJsYXkiIGlkPSJkaWN0ZWUtZ3JhZGUiIGhpZGRlbj4KICAgICAgICA8ZGl2IGNsYXNzPSJncmFkZS1jYXJkIj4KICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImdyYWRlLWJhZGdlIiBpZD0iZGljdGVlLWdyYWRlLWJhZGdlIj48L3NwYW4+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImdyYWRlLXNjb3JlIiBpZD0iZGljdGVlLWdyYWRlLXNjb3JlIj48L2Rpdj4KICAgICAgICAgICAgPHAgY2xhc3M9ImdyYWRlLW1zZyIgaWQ9ImRpY3RlZS1ncmFkZS1tc2ciPjwvcD4KICAgICAgICA8L2Rpdj4KICAgIDwvZGl2Pgo8L2Rpdj4KCg==");
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
            // Accept British AND American spellings (organised/organized, colour/color, centre/center...)
            // by canonicalising UK -> US. Applied to BOTH the typed answer and the expected text,
            // so a valid variant is never marked wrong.
            var UK_US = { colour:'color', colours:'colors', behaviour:'behavior', behaviours:'behaviors',
                favour:'favor', favours:'favors', favourite:'favorite', favourites:'favorites',
                neighbour:'neighbor', neighbours:'neighbors', labour:'labor', honour:'honor',
                centre:'center', centres:'centers', theatre:'theater', metre:'meter', litre:'liter',
                programme:'program', programmes:'programs', catalogue:'catalog', dialogue:'dialog',
                licence:'license', defence:'defense', offence:'offense', practise:'practice',
                grey:'gray', cancelled:'canceled', travelling:'traveling', traveller:'traveler', labelled:'labeled' };
            function toUS(w) {
                if (UK_US.hasOwnProperty(w)) return UK_US[w];
                return w.replace(/isations$/, 'izations').replace(/isation$/, 'ization')
                        .replace(/ising$/, 'izing').replace(/ised$/, 'ized')
                        .replace(/isers$/, 'izers').replace(/iser$/, 'izer')
                        .replace(/ises$/, 'izes').replace(/ise$/, 'ize');
            }
            return s.toLowerCase().replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ').trim()
                    .split(' ').map(toUS).join(' ');
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
            var playPromise = audio.play();
            if (playPromise && playPromise.catch) {
                playPromise.catch(function (err) {
                    // Autoplay blocked (iOS Safari) or load interrupted by the next phrase - NOT a file error. Fail silently; the play button is a valid user gesture.
                    if (err && (err.name === 'NotAllowedError' || err.name === 'AbortError')) {
                        status = 'idle';
                        playBtn.classList.remove('playing'); playIcon.style.display = '';
                        soundBars.classList.add('sound-bars-hidden');
                        return;
                    }
                    // Genuine decode/network failure - show the error box.
                    audioErrorEl.classList.add('visible'); status = 'idle'; renderCard();
                });
            }
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
