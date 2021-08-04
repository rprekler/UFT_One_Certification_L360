Browser("Advantage Shopping").Page("Advantage Shopping").Link("1").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set DataTable("username_value", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Check CheckPoint("safepay_username") @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").SetSecure "6109ae8ffd7426039a36e12d5264f45f80f355a583ec"
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click
