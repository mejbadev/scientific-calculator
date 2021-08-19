const inputField = document.getElementById('input-string');
        document.getElementById('input-part').addEventListener('click', function(event){
                if(typeof event.target.value !='undefined' && event.target.value !='clear' && event.target.value !='='){
                    inputField.value+=event.target.value;
                }else if(event.target.value=='clear'){
                    inputField.value='';
                }else if(event.target.value =='='){
                    getResult(inputField.value);
                }
        })
        function getResult(inputText){
            let inputEquation= inputText.replace(/cos|sin|tan|sqrt/gi, function(x){
                return x.replace(x, 'Math.'+x);
            })
            
            console.log(typeof eval(inputEquation));
            if (typeof eval(inputEquation) != 'undefined'){
                const result= eval(inputEquation);
                const displayResult= document.getElementById('input-string');
                displayResult.value=result+'';  
            }else{
               const displayError= document.getElementById('input-string');
               displayError.value =''+'MATH ERROR';
                  
            }
            
        }