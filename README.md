dive into browser process through performance 

首先一个空文件
chrome 会产生<html><head></head><body></body></html>
特别的load 在domcontent 之前？但是原始数据是正常的,只是mark 不正常，误差吧。。

最简单的文件
多了ResourceReceivedData

加入style
UpdateLayoutTree | Recalculate Style

DOMContentLoaded 在Recalculate Style 之前

换成css

加入inline js

Evaluate Script 在Parse Stylesheet 之后

换成file js

加了timeout 0
确实在load 之后啊

最简单的vue
