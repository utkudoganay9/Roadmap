7       	 <--SHAPES
7       	 <--LINES
id1
2       	 <--TYPE
393       	 <--LEFT
82       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
START



id2
91       	 <--TYPE
335       	 <--LEFT
150       	 <--TOP
188       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
1.deðeri gir
sayý1

id3
91       	 <--TYPE
331       	 <--LEFT
250       	 <--TOP
188       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
2.deðeri gir
sayý2

id4
92       	 <--TYPE
348       	 <--LEFT
343       	 <--TOP
144       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER
sayý1
sayý2

id5
91       	 <--TYPE
577       	 <--LEFT
355       	 <--TOP
124       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
sayý1 büyük


id6
91       	 <--TYPE
355       	 <--LEFT
442       	 <--TOP
124       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
sayý2 büyük


id7
2       	 <--TYPE
717       	 <--LEFT
465       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



  
---- LINES ---- from,to ----
id2,id3
reserved 1

id1,id2
reserved 1

id3,id4
reserved 1

id4,id5
reserved 1
EVET
id4,id6
reserved 1
HAYIR
id5,id7
reserved 1

id6,id7
reserved 1

