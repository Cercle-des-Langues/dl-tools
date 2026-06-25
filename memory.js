/* memory.js - CDL Memory self-mounting widget. Mounts into #cdl-memory. Needs cdl-tools.js. Generated; rebuild from memory-widget.html. */
(function(){"use strict";if(window.__cdlMemoryMounted)return;window.__cdlMemoryMounted=true;
function u8(b){var s=atob(b),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return new TextDecoder('utf-8').decode(a);}
var mount=document.getElementById('cdl-memory');if(!mount){mount=document.createElement('div');mount.id='cdl-memory';document.body.appendChild(mount);}
mount.style.display='block';mount.style.width='100%';mount.style.maxWidth='560px';mount.style.margin='0 auto';
mount.innerHTML=u8("PHN0eWxlPgogICAgLm1lbW9yeS1hcHAgKiwKICAgIC5tZW1vcnktYXBwICo6OmJlZm9yZSwKICAgIC5tZW1vcnktYXBwICo6OmFmdGVyIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9CgogICAgLm1lbW9yeS1hcHAgewogICAgICAgIC0tZ3JlZW46ICMxQUJDOUM7CiAgICAgICAgLS1nb2xkOiAjRkZDNDAwOwogICAgICAgIC0tbmF2eTogIzI2MzIzODsKICAgICAgICAtLXJlZDogI0M1MjgzRDsKICAgICAgICAtLXZsaWdodDogI0UwRjZGMTsKICAgICAgICAtLWdyZXk6ICNEN0Q3RDc7CiAgICAgICAgLS13aGl0ZTogI0ZGRkZGRjsKICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOwogICAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgIH0KCiAgICAubWVtb3J5LWFwcCAuaW50cm8gewogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07CiAgICB9CiAgICAubWVtb3J5LWFwcCAuaW50cm8gaDEgewogICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTsKICAgIH0KICAgIC5tZW1vcnktYXBwIC5pbnRybyBwIHsKICAgICAgICBmb250LXNpemU6IDAuOXJlbTsKICAgICAgICBjb2xvcjogIzZGNkY2RjsKICAgIH0KCiAgICAubWVtb3J5LWFwcCAuY2FyZCB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDI0cHggcmdiYSgzOCwgNTAsIDU2LCAwLjEyKTsKICAgICAgICBwYWRkaW5nOiAxLjVyZW07CiAgICB9CgogICAgLm1lbW9yeS1hcHAgLmh1ZCB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgICAgICAgZ2FwOiA4cHg7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTsKICAgIH0KICAgIC5tZW1vcnktYXBwIC5jZGwtbWVtLXNjb3JlIHsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTsKICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12bGlnaHQpOwogICAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTsKICAgICAgICBwYWRkaW5nOiA2cHggMTRweDsKICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4OwogICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOwogICAgfQogICAgLm1lbW9yeS1hcHAgLmNkbC1tZW0tc2NvcmUgYiB7IGNvbG9yOiB2YXIoLS1ncmVlbik7IH0KICAgIC5tZW1vcnktYXBwIC5saXZlcyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogNnB4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9CiAgICAubWVtb3J5LWFwcCAubGlmZSB7IHdpZHRoOiAyMnB4OyBoZWlnaHQ6IDIycHg7IHRyYW5zaXRpb246IG9wYWNpdHkgLjNzLCB0cmFuc2Zvcm0gLjNzOyB9CiAgICAubWVtb3J5LWFwcCAubGlmZS5sb3N0IHsgb3BhY2l0eTogMC4yNTsgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTsgfQoKICAgIC5tZW1vcnktYXBwIC5ncmlkIHsKICAgICAgICBkaXNwbGF5OiBncmlkOwogICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7CiAgICAgICAgZ2FwOiAxMnB4OwogICAgfQoKICAgIC5tZW1vcnktYXBwIC5tZW0tY2FyZCB7CiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7CiAgICAgICAgYm9yZGVyOiBub25lOwogICAgICAgIGJhY2tncm91bmQ6IG5vbmU7CiAgICAgICAgcGFkZGluZzogMDsKICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgcGVyc3BlY3RpdmU6IDcwMHB4OwogICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OwogICAgfQogICAgQHN1cHBvcnRzIG5vdCAoYXNwZWN0LXJhdGlvOiAxIC8gMSkgewogICAgICAgIC5tZW1vcnktYXBwIC5tZW0tY2FyZCB7IGhlaWdodDogMDsgcGFkZGluZy10b3A6IDEwMCU7IH0KICAgIH0KICAgIC5tZW1vcnktYXBwIC5tZW0tY2FyZF9faW5uZXIgewogICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICB0b3A6IDA7CiAgICAgICAgcmlnaHQ6IDA7CiAgICAgICAgYm90dG9tOiAwOwogICAgICAgIGxlZnQ6IDA7CiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTsKICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOwogICAgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1jYXJkLmlzLWZsaXBwZWQgLm1lbS1jYXJkX19pbm5lciwKICAgIC5tZW1vcnktYXBwIC5tZW0tY2FyZC5pcy1tYXRjaGVkIC5tZW0tY2FyZF9faW5uZXIgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfQoKICAgIC5tZW1vcnktYXBwIC5tZW0tZmFjZSB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogMDsKICAgICAgICByaWdodDogMDsKICAgICAgICBib3R0b206IDA7CiAgICAgICAgbGVmdDogMDsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsKICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsKICAgICAgICBwYWRkaW5nOiA2cHg7CiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBmb250LXNpemU6IDAuODJyZW07CiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDsKICAgICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgzOCwgNTAsIDU2LCAwLjEpOwogICAgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1mYWNlLS1iYWNrIHsKICAgICAgICBiYWNrZ3JvdW5kOiAjQzNGNEU5OwogICAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7CiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07CiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM3OENGQkU7CiAgICB9CiAgICAubWVtb3J5LWFwcCAubWVtLWZhY2UtLWZyb250IHsKICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7CiAgICAgICAgY29sb3I6IHZhcigtLW5hdnkpOwogICAgICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tZ3JleSk7CiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7CiAgICB9CiAgICBAbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHsKICAgICAgICAubWVtb3J5LWFwcCAuZ3JpZCB7IGdhcDogOHB4OyB9CiAgICAgICAgLm1lbW9yeS1hcHAgLm1lbS1mYWNlLS1mcm9udCB7IGZvbnQtc2l6ZTogMC43MnJlbTsgfQogICAgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1jYXJkLmlzLW1hdGNoZWQgLm1lbS1mYWNlLS1mcm9udCB7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pOwogICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7CiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7CiAgICB9CiAgICAubWVtb3J5LWFwcCAubWVtLWNhcmQuaXMtd3JvbmcgLm1lbS1mYWNlLS1mcm9udCB7CiAgICAgICAgYmFja2dyb3VuZDogI0ZCQ0RENDsKICAgICAgICBjb2xvcjogdmFyKC0tcmVkKTsKICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7CiAgICB9CiAgICAubWVtb3J5LWFwcCAubWVtLWNhcmQ6ZGlzYWJsZWQgeyBjdXJzb3I6IGRlZmF1bHQ7IH0KCiAgICAvKiDilIDilIAgUHJldmlldyBjb3VudGRvd24g4pSA4pSAICovCiAgICAubWVtb3J5LWFwcCAubWVtLWNvdW50ZG93biB7CiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDsKICAgICAgICBmb250LXNpemU6IDEuNXJlbTsKICAgICAgICBjb2xvcjogI0ZGQzQwMDsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtOwogICAgICAgIG1pbi1oZWlnaHQ6IDEuNnJlbTsKICAgIH0KCiAgICAvKiDilIDilIAgRW5kIC8gcm91bmQgLyBncmFkZSBvdmVybGF5IOKUgOKUgCAqLwogICAgLyogW2hpZGRlbl0gbXVzdCBiZWF0IHRoZSBkaXNwbGF5IHJ1bGVzIGJlbG93LCBvciB0aGUgb3ZlcmxheSBzaG93cyBlbXB0eSBvbiBsb2FkLiAqLwogICAgLm1lbW9yeS1hcHAgW2hpZGRlbl0geyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH0KCiAgICAubWVtb3J5LWFwcCAubWVtLW92ZXJsYXkgewogICAgICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgICAgICB0b3A6IDA7CiAgICAgICAgcmlnaHQ6IDA7CiAgICAgICAgYm90dG9tOiAwOwogICAgICAgIGxlZnQ6IDA7CiAgICAgICAgei1pbmRleDogOTk5ODsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgICAgcGFkZGluZzogMjBweDsKICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM4LCA1MCwgNTYsIDAuNTUpOwogICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7CiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7CiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsKICAgIH0KICAgIC5tZW1vcnktYXBwIC5tZW0tb3ZlcmxheV9fY2FyZCB7CiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjsKICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4OwogICAgICAgIHBhZGRpbmc6IDMycHggMjhweDsKICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDI0cHggcmdiYSgzOCwgNTAsIDU2LCAwLjE1KTsKICAgICAgICBtYXgtd2lkdGg6IDM4MHB4OwogICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIGFuaW1hdGlvbjogbm9uZTsKICAgIH0KICAgIC5tZW1vcnktYXBwIC5tZW0tb3YtYmFkZ2UgewogICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICAgICAgICBwYWRkaW5nOiA1cHggMTRweDsKICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4OwogICAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07CiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsKICAgICAgICBiYWNrZ3JvdW5kOiAjRTBGNkYxOwogICAgICAgIGNvbG9yOiAjMEE2QjVBOwogICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7CiAgICB9CiAgICAubWVtb3J5LWFwcCAubWVtLW92LXNjb3JlIHsKICAgICAgICBmb250LXNpemU6IDNyZW07CiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDsKICAgICAgICBjb2xvcjogIzI2MzIzODsKICAgICAgICBsaW5lLWhlaWdodDogMTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OwogICAgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1vdi1tc2cgewogICAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTsKICAgICAgICBjb2xvcjogIzI2MzIzODsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsKICAgICAgICBsaW5lLWhlaWdodDogMS40OwogICAgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1vdi1hY3Rpb25zIHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgZ2FwOiAxMHB4OwogICAgICAgIG1hcmdpbi10b3A6IDE4cHg7CiAgICB9CiAgICAubWVtb3J5LWFwcCAubWVtLW92LWJ0biB7CiAgICAgICAgY3Vyc29yOiBwb2ludGVyOwogICAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTsKICAgICAgICBwYWRkaW5nOiAxMnB4IDE4cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4OwogICAgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1vdi1idG4tLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiAjRkZDNDAwOyBjb2xvcjogIzI2MzIzODsgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1vdi1idG4tLWdob3N0IHsgYmFja2dyb3VuZDogbm9uZTsgY29sb3I6ICMyNjMyMzg7IG9wYWNpdHk6IDAuNzsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IHBhZGRpbmc6IDEwcHggMTJweDsgfQo8L3N0eWxlPgoKPGRpdiBjbGFzcz0ibWVtb3J5LWFwcCIgaWQ9Im1lbW9yeUFwcCI+CiAgICA8ZGl2IGNsYXNzPSJpbnRybyI+CiAgICAgICAgPGgxPk1lbW9yeSAtIHZvY2FidWxhaXJlIHByb2Zlc3Npb25uZWw8L2gxPgogICAgICAgIDxwPkFzc29jaWV6IGNoYXF1ZSBtb3QgYW5nbGFpcyDDoCBzYSB0cmFkdWN0aW9uIGZyYW7Dp2Fpc2UuPC9wPgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJjYXJkIj4KICAgICAgICA8ZGl2IGNsYXNzPSJodWQiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjZGwtbWVtLXNjb3JlIiBpZD0ibWVtLXNjb3JlIj5QYWlyZXMgOiA8Yj4wPC9iPiAvIDg8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ibGl2ZXMiIGlkPSJtZW0tbGl2ZXMiPjwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9Im1lbS1jb3VudGRvd24iIGlkPSJtZW0tY291bnRkb3duIiBoaWRkZW4+PC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iZ3JpZCIgaWQ9Im1lbS1ncmlkIj48L2Rpdj4KICAgIDwvZGl2PgoKICAgIDxkaXYgY2xhc3M9Im1lbS1vdmVybGF5IiBpZD0ibWVtLW92ZXJsYXkiIGhpZGRlbj4KICAgICAgICA8ZGl2IGNsYXNzPSJtZW0tb3ZlcmxheV9fY2FyZCI+CiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJtZW0tb3YtYmFkZ2UiIGlkPSJtZW0tb3YtYmFkZ2UiIGhpZGRlbj48L3NwYW4+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im1lbS1vdi1zY29yZSIgaWQ9Im1lbS1vdi1zY29yZSIgaGlkZGVuPjwvZGl2PgogICAgICAgICAgICA8cCBjbGFzcz0ibWVtLW92LW1zZyIgaWQ9Im1lbS1vdi1tc2ciPjwvcD4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ibWVtLW92LWFjdGlvbnMiIGlkPSJtZW0tb3YtYWN0aW9ucyIgaGlkZGVuPjwvZGl2PgogICAgICAgIDwvZGl2PgogICAgPC9kaXY+CjwvZGl2Pgo=");
    (function () {
        var PAIRS = [
            { en: 'schedule', fr: 'emploi du temps' },
            { en: 'deadline', fr: 'échéance' },
            { en: 'meeting',  fr: 'réunion' },
            { en: 'report',   fr: 'rapport' },
            { en: 'budget',   fr: 'budget' },
            { en: 'invoice',  fr: 'facture' },
            { en: 'feedback', fr: 'retour' },
            { en: 'contract', fr: 'contrat' }
        ];
        var LIVES_START = 10;

        // Build the 16 cards (one EN + one FR per pair), then shuffle.
        var cards = [];
        PAIRS.forEach(function (p, i) {
            cards.push({ pairId: i, lang: 'en', text: p.en });
            cards.push({ pairId: i, lang: 'fr', text: p.fr });
        });
        function shuffle(a) {
            for (var i = a.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var t = a[i]; a[i] = a[j]; a[j] = t;
            }
            return a;
        }
        shuffle(cards);

        // State
        var lives = LIVES_START;
        var matchCount = 0;
        var matched = {};       // pairId -> true
        var flipped = [];       // indices face-up & unmatched
        var locked = false;
        var ended = false;
        var streak = 0;             // consecutive matches with no mismatch
        var streakShown = false;    // streak pop-up fires once per game
        var STREAK_TARGET = 5;
        var round = 1;              // 1 or 2

        // DOM
        var el = function (id) { return document.getElementById(id); };
        var gridEl = el('mem-grid');
        var livesEl = el('mem-lives');
        var scoreEl = el('mem-score');
        var cdEl = el('mem-countdown');
        var overlayEl = el('mem-overlay');
        var ovBadge = el('mem-ov-badge');
        var ovScore = el('mem-ov-score');
        var ovMsg = el('mem-ov-msg');
        var ovActions = el('mem-ov-actions');

        var HEART = '<svg class="life" viewBox="0 0 24 24" fill="#1ABC9C" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.2C.6 9 1.5 5.5 4.7 4.6 6.8 4 9 5 12 7.6 15-1 17.2 4 19.3 4.6c3.2.9 4.1 4.4 2.7 7.2C19.5 16.4 12 21 12 21z"/></svg>';

        function renderGrid() {
            gridEl.innerHTML = '';
            cards.forEach(function (card, idx) {
                var btn = document.createElement('button');
                btn.className = 'mem-card';
                btn.setAttribute('data-idx', idx);
                btn.setAttribute('aria-label', 'Carte ' + (idx + 1));
                btn.innerHTML =
                    '<span class="mem-card__inner">' +
                        '<span class="mem-face mem-face--back">?</span>' +
                        '<span class="mem-face mem-face--front"></span>' +
                    '</span>';
                btn.querySelector('.mem-face--front').textContent = card.text;   // textContent, never innerHTML
                btn.addEventListener('click', function () { onClick(idx, btn); });
                gridEl.appendChild(btn);
            });
        }

        function renderLives() {
            var html = '';
            for (var i = 0; i < LIVES_START; i++) {
                html += HEART.replace('class="life"', 'class="life' + (i < lives ? '' : ' lost') + '"');
            }
            livesEl.innerHTML = html;
        }

        function renderScore() {
            scoreEl.innerHTML = 'Paires : <b>' + matchCount + '</b> / ' + PAIRS.length;
        }

        function cardEl(idx) { return gridEl.querySelector('[data-idx="' + idx + '"]'); }

        function onClick(idx, btn) {
            if (locked || ended) return;
            var card = cards[idx];
            if (matched[card.pairId]) return;
            if (flipped.indexOf(idx) !== -1) return;

            btn.classList.add('is-flipped');
            flipped.push(idx);
            if (flipped.length < 2) return;

            var iA = flipped[0], iB = flipped[1];
            if (cards[iA].pairId === cards[iB].pairId) {
                // Match
                matched[cards[iA].pairId] = true;
                matchCount++;
                cardEl(iA).classList.add('is-matched');
                cardEl(iB).classList.add('is-matched');
                cardEl(iA).disabled = true;
                cardEl(iB).disabled = true;
                flipped = [];
                renderScore();
                streak++;
                if (matchCount === PAIRS.length) {
                    ended = true;
                    setTimeout(endRound, 550);
                } else if (streak >= STREAK_TARGET && !streakShown && !CDLTools.hasSubmitted()) {
                    streakShown = true;
                    streakFlow();
                }
            } else {
                // Mismatch - lose a life, flash red, flip back after 1s
                locked = true;
                lives--;
                streak = 0;
                renderLives();
                cardEl(iA).classList.add('is-wrong');
                cardEl(iB).classList.add('is-wrong');
                var pair = flipped.slice();
                flipped = [];
                setTimeout(function () {
                    pair.forEach(function (i) {
                        var c = cardEl(i);
                        c.classList.remove('is-flipped', 'is-wrong');
                    });
                    locked = false;
                    if (lives <= 0) { ended = true; endRound(); }
                }, 1000);
            }
        }

        function streakFlow() {
            locked = true;   // freeze the board while the streak pop-up is up; cleared in onClose
            CDLTools.openModal({ toolId: 'memory', trigger: 'streak', segment: 'streak', score: matchCount, title: 'Série de ' + streak + ' ! Mémoire affûtée.' });
        }

        // ── Lead forms ──
        function openWinForm() {
            if (window.CDLTools && CDLTools.track) CDLTools.track('tool_complete', { tool: 'memory', category: 'game', value: matchCount });
            if (CDLTools.hasSubmitted()) { window.location.reload(); return; }   // already captured - fresh game, not a dead end
            CDLTools.openModal({ toolId: 'memory', trigger: 'win', segment: 'win', score: matchCount });
        }
        function openStruggleForm() {
            if (CDLTools.hasSubmitted()) { window.location.reload(); return; }   // already captured - fresh game, not a dead end
            CDLTools.openModal({ toolId: 'memory', trigger: 'struggle', segment: 'struggle', score: matchCount });
        }

        // ── Overlay (end message / round-2 choice / grade) ──
        function hideOverlay() {
            ovBadge.hidden = true; ovScore.hidden = true; ovActions.hidden = true; ovActions.innerHTML = '';
            overlayEl.hidden = true;
        }
        function showMessage(msg, cb, delay) {
            overlayEl.hidden = false;
            ovBadge.hidden = true; ovScore.hidden = true; ovActions.hidden = true; ovActions.innerHTML = '';
            ovMsg.textContent = msg;
            if (cb) setTimeout(function () { hideOverlay(); cb(); }, delay || 1500);
        }
        function showRoundChoice() {
            overlayEl.hidden = false;
            ovBadge.hidden = true; ovScore.hidden = true;
            ovMsg.textContent = 'Niveau 1 terminé. Prêt pour le niveau 2 ?';
            ovActions.innerHTML = '';
            var go = document.createElement('button');
            go.className = 'mem-ov-btn mem-ov-btn--primary';
            go.textContent = 'Continuer - Niveau 2';
            go.addEventListener('click', function () { hideOverlay(); startRound(2); });
            var skip = document.createElement('button');
            skip.className = 'mem-ov-btn mem-ov-btn--ghost';
            skip.textContent = 'Voir mon résultat';
            skip.addEventListener('click', function () { hideOverlay(); openWinForm(); });
            ovActions.appendChild(go); ovActions.appendChild(skip);
            ovActions.hidden = false;
        }
        function showGradeThenForm() {
            overlayEl.hidden = false;
            ovActions.hidden = true; ovActions.innerHTML = '';
            ovBadge.hidden = false; ovBadge.textContent = 'Mémoire';
            ovScore.hidden = false; ovScore.textContent = matchCount + ' / ' + PAIRS.length;
            ovMsg.textContent = lives >= 8 ? 'Votre mémoire du vocabulaire professionnel est excellente.' : lives >= 4 ? 'Votre mémoire du vocabulaire professionnel progresse.' : 'Votre mémoire du vocabulaire professionnel a besoin d\'entraînement.';
            setTimeout(function () { hideOverlay(); openWinForm(); }, 2000);
        }

        function endRound() {
            if (matchCount === PAIRS.length) {
                if (round === 1) {
                    showMessage('Bravo ! Vous avez trouvé toutes les paires.', showRoundChoice, 1500);
                } else {
                    showMessage('Bravo ! Vous avez trouvé toutes les paires.', showGradeThenForm, 1500);
                }
            } else {
                showMessage('Pas de panique, c\'est un exercice de mémoire.', openStruggleForm, 1500);
            }
        }

        // ── Preview phase: flip all up, countdown, flip all down ──
        function preview(ms) {
            locked = true;
            var allCards = gridEl.querySelectorAll('.mem-card');
            allCards.forEach(function (c) { c.classList.add('is-flipped'); });
            var secs = Math.max(1, Math.round(ms / 1000));
            cdEl.hidden = false;
            cdEl.textContent = 'Mémorisez ! ' + secs + '...';
            var tick = setInterval(function () {
                secs--;
                if (secs > 0) cdEl.textContent = 'Mémorisez ! ' + secs + '...';
            }, ms / Math.max(1, Math.round(ms / 1000)));
            setTimeout(function () {
                clearInterval(tick);
                cdEl.hidden = true;
                allCards.forEach(function (c) { c.classList.remove('is-flipped'); });
                locked = false;
            }, ms);
        }

        // ── Round lifecycle ──
        function startRound(r) {
            round = r;
            lives = LIVES_START;
            matchCount = 0; matched = {}; flipped = []; ended = false; streak = 0;
            shuffle(cards);              // fresh layout each round
            renderGrid(); renderLives(); renderScore();
            preview(r === 1 ? 7000 : 3000);
        }

        // ── Register the tool on the shared module (Mode A) ──
        CDLTools.register({
            toolId: 'memory',
            portalId: '6034125',
            formId: '71b010ce-dc05-47ce-88c4-130674855dae',  // formulaire partagé CDL (même que la dictée) - différencié par outil_source
            hiddenFields: { outil_source: 'memory' },
            cta: 'Réserver mon bilan offert',
            onClose: function (ctx) {
                if (ctx && ctx.trigger === 'streak') { locked = false; return; }   // resume play
                window.location.reload();                       // win / struggle -> fresh game
            },
            copy: {
                win: {
                    win: {
                        title: "Vocabulaire retenu, connexions faites.",
                        text:  "C'est exactement comme ça qu'on construit un anglais solide. Un conseiller pédagogique peut structurer ça pour vous. Laissez votre numéro, nous vous rappelons."
                    }
                },
                struggle: {
                    struggle: {
                        title: "La mémorisation du vocabulaire anglais demande de la méthode.",
                        text:  "Un conseiller pédagogique peut vous donner cette méthode. Laissez votre numéro, nous vous rappelons."
                    }
                },
                streak: {
                    streak: {
                        title: "Mémoire affûtée.",
                        text:  "Vous associez les mots sans hésiter. Un conseiller pédagogique peut transformer cette aisance en vocabulaire solide. Laissez votre numéro, nous vous rappelons."
                    }
                }
            }
        });

        // ── Init ──
        if (window.CDLTools && CDLTools.track) CDLTools.track('tool_start', { tool: 'memory', category: 'game' });
        startRound(1);
    })();
})();
