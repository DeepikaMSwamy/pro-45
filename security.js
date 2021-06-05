class Security {

    constructor(){

        this.access1 = createInput("Type your answer here")
        this.access1.position(540,274);
        this.access1.style('background', 'pink');  

        this.text1 = createElement('h1')
        this.text1.html("He envented the concrpt of zero")
        this.text1.position(240,190);
        this.text1.style('background', 'pink');  

        this.text2 = createElement('h1')
        this.text2.html("The Entered ans is wrong")
      
        this.text2.style('background', 'pink');  

        this.button1 = createButton('Check');
        this.button1.position(540,300);
        this.button1.style('background', 'pink');    

       
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                this.text1.hide()
            
                score++;

            }
            else
            {
                this.text2.position(240,190);
            }

        });
    }
}    

   


      