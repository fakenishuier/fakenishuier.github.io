
hidden_object = {
	is_hiddend:true,hid_button : "",hid_InnerHTML : "",
	init:function (buttonID,hiddenId,hiddenInnerHTML,this_hidden_object){
		this_hidden_object.hid_button=document.getElementById(buttonID)
		this_hidden_object.hid_InnerHTML=document.getElementById(hiddenId)
                this_hidden_object.hid_button.innerHTML="show"
		this_hidden_object.hid_button.addEventListener("click",function(){
			if (this_hidden_object.is_hiddend==true){
			this_hidden_object.hid_InnerHTML.innerHTML=hiddenInnerHTML
			this_hidden_object.hid_button.innerHTML="hidden"
			this_hidden_object.is_hiddend = false
			}else{
				this_hidden_object.hid_InnerHTML.innerHTML=""
				this_hidden_object.hid_button.innerHTML="show"
				this_hidden_object.is_hiddend = true
			}
		})
	}
}
