SystemUtil.CloseProcessByName "chrome.exe"
SystemUtil.Run "chrome.exe", "http://advantageonlineshopping.com", "", "open", 0
For sendFeedback = 1 To 4 Step 1
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTACT US").Click @@ script infofile_;_ZIP::ssf1.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("categoryListboxContactUs").Select "Laptops" @@ script infofile_;_ZIP::ssf2.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebList("productListboxContactUs").Select "HP Chromebook 14 G1(ENERGY STAR)" @@ script infofile_;_ZIP::ssf3.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("emailContactUs").Set "banderson@co.uk" @@ script infofile_;_ZIP::ssf4.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("subjectTextareaContactUs").Set "Please send me more details about the hardware" @@ script infofile_;_ZIP::ssf5.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("send_btnundefined").Click @@ script infofile_;_ZIP::ssf6.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Thank you for contacting").Check CheckPoint("Thank you for contacting Advantage support.") @@ script infofile_;_ZIP::ssf7.xml_;_
	Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Next
SystemUtil.CloseProcessByName "chrome.exe"
