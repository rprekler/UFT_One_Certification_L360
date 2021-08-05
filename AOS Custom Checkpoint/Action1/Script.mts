Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ script infofile_;_ZIP::ssf2.xml_;_
foo = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").Exist (20) @@ script infofile_;_ZIP::ssf3.xml_;_
currentScore = cDbl(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").GetROProperty("innerhtml")) @@ script infofile_;_ZIP::ssf3.xml_;_
If currentScore >= 9.0 Then
Reporter.ReportEvent micPass, "checkScore", "Score exceeded the desired value f 9.0"
Else
Reporter.ReportEvent micFail, "checkScore", "Score is too low"
End If
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ script infofile_;_ZIP::ssf4.xml_;_
