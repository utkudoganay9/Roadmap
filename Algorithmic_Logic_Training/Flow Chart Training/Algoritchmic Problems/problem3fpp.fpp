8       	 <--SHAPES
9       	 <--LINES
id1
2       	 <--TYPE
284       	 <--LEFT
61       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
START



id2
2       	 <--TYPE
291       	 <--LEFT
495       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id3
91       	 <--TYPE
220       	 <--LEFT
126       	 <--TOP
196       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
tamsayýyý gir
deðer

id4
92       	 <--TYPE
268       	 <--LEFT
203       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER
deðer
0

id5
92       	 <--TYPE
271       	 <--LEFT
300       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_LESS
deðer
0

id6
91       	 <--TYPE
498       	 <--LEFT
208       	 <--TOP
92       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
pozitif


id7
91       	 <--TYPE
452       	 <--LEFT
298       	 <--TOP
92       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
negatif


id8
91       	 <--TYPE
281       	 <--LEFT
378       	 <--TOP
90       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
sifir


  
---- LINES ---- from,to ----
id1,id3
reserved 1

id3,id4
reserved 1

id4,id6
reserved 1
EVET
id4,id5
reserved 1
HAYIR
id5,id7
reserved 1
EVET
id5,id8
reserved 1
HAYIR
id7,id2
reserved 1

id8,id2
reserved 1

id6,id2
reserved 1

