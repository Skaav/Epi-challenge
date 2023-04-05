

    let a1=4;
    let a2=2;
    let a3=3;

    if(a1>a2){
        console.log(a1);
    }


    {
        let totalShoppingCart = 31;
        // variabile sconto che calcola il Black Friday
        let sconto = totalShoppingCart * 0.8;
      
      
        if (sconto > 50) {
          console.log("Checkout" + sconto);
      
        } else {
          console.log("La tua spesa è di" + '' + sconto);
          console.log("Il costo di spedizione è di 10");
          sconto += 10;
          console.log("Checkout" + sconto);
        }
      }