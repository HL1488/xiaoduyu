

export function AJAX(method,url,data,fn){

		var xhr;

		xhr=new XMLHttpRequest();

		if(method=='get'){
			url=url+'?'+data;
		}


		xhr.open(method,url,true)

		if(method=='get'){
			xhr.send();
		}else{
			xhr.setRequestHeader('Content-Type','application/json')
			xhr.send(data);
		}

		xhr.onreadystatechange=function(){

			if(xhr.readyState==4){

				if(xhr.status==200){

					fn&&fn(xhr.responseText)
				}else{
					console.log('出错了！！！Err:'+xhr.status)
				}
			}
		}
	}