/* memory.js - CDL Memory self-mounting widget. Mounts into #cdl-memory. Needs cdl-tools.js. Generated; rebuild from memory-widget.html. */
(function(){"use strict";if(window.__cdlMemoryMounted)return;window.__cdlMemoryMounted=true;
function u8(b){var s=atob(b),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return new TextDecoder('utf-8').decode(a);}
var mount=document.getElementById('cdl-memory');if(!mount){mount=document.createElement('div');mount.id='cdl-memory';document.body.appendChild(mount);}
mount.style.display='block';mount.style.width='100%';mount.style.maxWidth='560px';mount.style.margin='0 auto';
mount.innerHTML=u8("PHN0eWxlPgogICAgLm1lbW9yeS1hcHAgKiwKICAgIC5tZW1vcnktYXBwICo6OmJlZm9yZSwKICAgIC5tZW1vcnktYXBwICo6OmFmdGVyIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9CgogICAgLm1lbW9yeS1hcHAgewogICAgICAgIC0tZ3JlZW46ICMxQUJDOUM7CiAgICAgICAgLS1nb2xkOiAjRkZDNDAwOwogICAgICAgIC0tbmF2eTogIzI2MzIzODsKICAgICAgICAtLXJlZDogI0M1MjgzRDsKICAgICAgICAtLXZsaWdodDogI0UwRjZGMTsKICAgICAgICAtLWdyZXk6ICNEN0Q3RDc7CiAgICAgICAgLS13aGl0ZTogI0ZGRkZGRjsKICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOwogICAgICAgIGNvbG9yOiB2YXIoLS1uYXZ5KTsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgIH0KCiAgICAubWVtb3J5LWFwcCAuaW50cm8gewogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07CiAgICB9CiAgICAubWVtb3J5LWFwcCAuaW50cm8gaDEgewogICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTsKICAgIH0KICAgIC5tZW1vcnktYXBwIC5pbnRybyBwIHsKICAgICAgICBmb250LXNpemU6IDAuOXJlbTsKICAgICAgICBjb2xvcjogIzZGNkY2RjsKICAgIH0KCiAgICAubWVtb3J5LWFwcCAuY2FyZCB7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpOwogICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7CiAgICAgICAgYm94LXNoYWRvdzogMCAwIDI0cHggcmdiYSgzOCwgNTAsIDU2LCAwLjEyKTsKICAgICAgICBwYWRkaW5nOiAxLjVyZW07CiAgICB9CgogICAgLm1lbW9yeS1hcHAgLmh1ZCB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtOwogICAgfQogICAgLm1lbW9yeS1hcHAgLmNkbC1tZW0tc2NvcmUgewogICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7CiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtOwogICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXZsaWdodCk7CiAgICAgICAgY29sb3I6IHZhcigtLW5hdnkpOwogICAgICAgIHBhZGRpbmc6IDZweCAxNHB4OwogICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7CiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOwogICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICB9CiAgICAubWVtb3J5LWFwcCAuY2RsLW1lbS1zY29yZSBiIHsgY29sb3I6IHZhcigtLWdyZWVuKTsgfQogICAgLm1lbW9yeS1hcHAgLmxpdmVzIHsgZGlzcGxheTogZmxleDsgZ2FwOiA2cHg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH0KICAgIC5tZW1vcnktYXBwIC5saWZlIHsgd2lkdGg6IDIycHg7IGhlaWdodDogMjJweDsgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MsIHRyYW5zZm9ybSAuM3M7IH0KICAgIC5tZW1vcnktYXBwIC5saWZlLmxvc3QgeyBvcGFjaXR5OiAwLjI1OyB0cmFuc2Zvcm06IHNjYWxlKDAuODUpOyB9CgogICAgLm1lbW9yeS1hcHAgLmdyaWQgewogICAgICAgIGRpc3BsYXk6IGdyaWQ7CiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTsKICAgICAgICBnYXA6IDEycHg7CiAgICB9CgogICAgLm1lbW9yeS1hcHAgLm1lbS1jYXJkIHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgYmFja2dyb3VuZDogbm9uZTsKICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICBwZXJzcGVjdGl2ZTogNzAwcHg7CiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7CiAgICB9CiAgICAubWVtb3J5LWFwcCAubWVtLWNhcmRfX2lubmVyIHsKICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgaW5zZXQ6IDA7CiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTsKICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOwogICAgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1jYXJkLmlzLWZsaXBwZWQgLm1lbS1jYXJkX19pbm5lciwKICAgIC5tZW1vcnktYXBwIC5tZW0tY2FyZC5pcy1tYXRjaGVkIC5tZW0tY2FyZF9faW5uZXIgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfQoKICAgIC5tZW1vcnktYXBwIC5tZW0tZmFjZSB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIGluc2V0OiAwOwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7CiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOwogICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOwogICAgICAgIHBhZGRpbmc6IDZweDsKICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjsKICAgICAgICBmb250LXdlaWdodDogNjAwOwogICAgICAgIGZvbnQtc2l6ZTogMC44MnJlbTsKICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkOwogICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDM4LCA1MCwgNTYsIDAuMSk7CiAgICB9CiAgICAubWVtb3J5LWFwcCAubWVtLWZhY2UtLWJhY2sgewogICAgICAgIGJhY2tncm91bmQ6ICNDM0Y0RTk7CiAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTsKICAgICAgICBmb250LXNpemU6IDEuNnJlbTsKICAgICAgICBmb250LXdlaWdodDogNzAwOwogICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzc4Q0ZCRTsKICAgIH0KICAgIC5tZW1vcnktYXBwIC5tZW0tZmFjZS0tZnJvbnQgewogICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTsKICAgICAgICBjb2xvcjogdmFyKC0tbmF2eSk7CiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1ncmV5KTsKICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsKICAgIH0KICAgIC5tZW1vcnktYXBwIC5tZW0tY2FyZC5pcy1tYXRjaGVkIC5tZW0tZmFjZS0tZnJvbnQgewogICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTsKICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpOwogICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pOwogICAgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1jYXJkLmlzLXdyb25nIC5tZW0tZmFjZS0tZnJvbnQgewogICAgICAgIGJhY2tncm91bmQ6ICNGQkNERDQ7CiAgICAgICAgY29sb3I6IHZhcigtLXJlZCk7CiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWQpOwogICAgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1jYXJkOmRpc2FibGVkIHsgY3Vyc29yOiBkZWZhdWx0OyB9CgogICAgLyog4pSA4pSAIFByZXZpZXcgY291bnRkb3duIOKUgOKUgCAqLwogICAgLm1lbW9yeS1hcHAgLm1lbS1jb3VudGRvd24gewogICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOwogICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7CiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07CiAgICAgICAgY29sb3I6ICNGRkM0MDA7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTsKICAgICAgICBtaW4taGVpZ2h0OiAxLjZyZW07CiAgICB9CgogICAgLyog4pSA4pSAIEVuZCAvIHJvdW5kIC8gZ3JhZGUgb3ZlcmxheSDilIDilIAgKi8KICAgIC8qIFtoaWRkZW5dIG11c3QgYmVhdCB0aGUgZGlzcGxheSBydWxlcyBiZWxvdywgb3IgdGhlIG92ZXJsYXkgc2hvd3MgZW1wdHkgb24gbG9hZC4gKi8KICAgIC5tZW1vcnktYXBwIFtoaWRkZW5dIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9CgogICAgLm1lbW9yeS1hcHAgLm1lbS1vdmVybGF5IHsKICAgICAgICBwb3NpdGlvbjogZml4ZWQ7CiAgICAgICAgaW5zZXQ6IDA7CiAgICAgICAgei1pbmRleDogOTk5ODsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgICAgcGFkZGluZzogMjBweDsKICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM4LCA1MCwgNTYsIDAuNTUpOwogICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpOwogICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7CiAgICB9CiAgICAubWVtb3J5LWFwcCAubWVtLW92ZXJsYXlfX2NhcmQgewogICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7CiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDsKICAgICAgICBwYWRkaW5nOiAzMnB4IDI4cHg7CiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgIGJveC1zaGFkb3c6IDAgMCAyNHB4IHJnYmEoMzgsIDUwLCA1NiwgMC4xNSk7CiAgICAgICAgbWF4LXdpZHRoOiAzODBweDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBhbmltYXRpb246IG5vbmU7CiAgICB9CiAgICAubWVtb3J5LWFwcCAubWVtLW92LWJhZGdlIHsKICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgcGFkZGluZzogNXB4IDE0cHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDsKICAgICAgICBmb250LXNpemU6IDAuNzJyZW07CiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtOwogICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgICAgICAgYmFja2dyb3VuZDogI0UwRjZGMTsKICAgICAgICBjb2xvcjogIzBBNkI1QTsKICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4OwogICAgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1vdi1zY29yZSB7CiAgICAgICAgZm9udC1zaXplOiAzcmVtOwogICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7CiAgICAgICAgY29sb3I6ICMyNjMyMzg7CiAgICAgICAgbGluZS1oZWlnaHQ6IDE7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsKICAgIH0KICAgIC5tZW1vcnktYXBwIC5tZW0tb3YtbXNnIHsKICAgICAgICBmb250LXNpemU6IDEuMDVyZW07CiAgICAgICAgY29sb3I6ICMyNjMyMzg7CiAgICAgICAgbWFyZ2luOiAwOwogICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7CiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDsKICAgIH0KICAgIC5tZW1vcnktYXBwIC5tZW0tb3YtYWN0aW9ucyB7CiAgICAgICAgZGlzcGxheTogZmxleDsKICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICAgIGdhcDogMTBweDsKICAgICAgICBtYXJnaW4tdG9wOiAxOHB4OwogICAgfQogICAgLm1lbW9yeS1hcHAgLm1lbS1vdi1idG4gewogICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7CiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsKICAgICAgICBmb250LXNpemU6IDAuOTVyZW07CiAgICAgICAgcGFkZGluZzogMTJweCAxOHB4OwogICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDsKICAgIH0KICAgIC5tZW1vcnktYXBwIC5tZW0tb3YtYnRuLS1wcmltYXJ5IHsgYmFja2dyb3VuZDogI0ZGQzQwMDsgY29sb3I6ICMyNjMyMzg7IH0KICAgIC5tZW1vcnktYXBwIC5tZW0tb3YtYnRuLS1naG9zdCB7IGJhY2tncm91bmQ6IG5vbmU7IGNvbG9yOiAjMjYzMjM4OyBvcGFjaXR5OiAwLjc7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBwYWRkaW5nOiA2cHg7IH0KPC9zdHlsZT4KCjxkaXYgY2xhc3M9Im1lbW9yeS1hcHAiIGlkPSJtZW1vcnlBcHAiPgogICAgPGRpdiBjbGFzcz0iaW50cm8iPgogICAgICAgIDxoMT5NZW1vcnkgLSB2b2NhYnVsYWlyZSBwcm9mZXNzaW9ubmVsPC9oMT4KICAgICAgICA8cD5Bc3NvY2lleiBjaGFxdWUgbW90IGFuZ2xhaXMgw6Agc2EgdHJhZHVjdGlvbiBmcmFuw6dhaXNlLjwvcD4KICAgIDwvZGl2PgogICAgPGRpdiBjbGFzcz0iY2FyZCI+CiAgICAgICAgPGRpdiBjbGFzcz0iaHVkIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY2RsLW1lbS1zY29yZSIgaWQ9Im1lbS1zY29yZSI+UGFpcmVzIDogPGI+MDwvYj4gLyA4PC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImxpdmVzIiBpZD0ibWVtLWxpdmVzIj48L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJtZW0tY291bnRkb3duIiBpZD0ibWVtLWNvdW50ZG93biIgaGlkZGVuPjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9ImdyaWQiIGlkPSJtZW0tZ3JpZCI+PC9kaXY+CiAgICA8L2Rpdj4KCiAgICA8ZGl2IGNsYXNzPSJtZW0tb3ZlcmxheSIgaWQ9Im1lbS1vdmVybGF5IiBoaWRkZW4+CiAgICAgICAgPGRpdiBjbGFzcz0ibWVtLW92ZXJsYXlfX2NhcmQiPgogICAgICAgICAgICA8c3BhbiBjbGFzcz0ibWVtLW92LWJhZGdlIiBpZD0ibWVtLW92LWJhZGdlIiBoaWRkZW4+PC9zcGFuPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJtZW0tb3Ytc2NvcmUiIGlkPSJtZW0tb3Ytc2NvcmUiIGhpZGRlbj48L2Rpdj4KICAgICAgICAgICAgPHAgY2xhc3M9Im1lbS1vdi1tc2ciIGlkPSJtZW0tb3YtbXNnIj48L3A+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im1lbS1vdi1hY3Rpb25zIiBpZD0ibWVtLW92LWFjdGlvbnMiIGhpZGRlbj48L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgIDwvZGl2Pgo8L2Rpdj4K");
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
        var LIVES_START = 5;

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
            ovMsg.textContent = lives >= 4 ? 'Votre mémoire du vocabulaire professionnel est excellente.' : lives >= 2 ? 'Votre mémoire du vocabulaire professionnel progresse.' : 'Votre mémoire du vocabulaire professionnel a besoin d\'entraînement.';
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
            preview(r === 1 ? 3000 : 1500);
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
