$(document).ready(function(){
    //prototype
        //constructor
        function Order(size, topping, crust){
            this.size = size
            this.topping = topping
            this.crust = crust        
        }
        //prototype
        Order.prototype.fullOrder = function(){
            return ("Your order has " + this.size + " " + this.topping + " " + this.crust); 
        }
    
        //user interface
        $("#ordernow").click(function(e){
            $("table").show();
            $("#checkout").show();
            // console.log("seen");
            var asize = $("#size").val();    
            var atopping = $("#topping").val();
            var acrust = $("#crust").val();
            var yourOrder = new Order (asize, atopping, acrust);
            console.log(yourOrder.fullOrder());
    
            //pricing
            var sizePrice
            var toppingPrice
            var crustPrice
    
            //size
            if (asize === "small"){
                sizePrice = 400;
                //console.log(sizePrice); 
            }else if (asize === "medium"){
                sizePrice = 600;
            }else if (asize === "large"){
                sizePrice = 800;
            }
            // console.log("Cost is " + sizePrice);
            console.log("Cost is " + sizePrice); //test

            //topping
            if (asize === "small"){
                if (atopping === "pepperoni"){
                    toppingPrice = 80;
                }else if (atopping === "cheese"){
                    toppingPrice = 100;
                }else if (atopping === "mushroom"){
                    toppingPrice = 120;
                }
            }
    
            if (asize === "medium"){
                if (atopping === "pepperoni"){
                    toppingPrice = 100;
                }else if (atopping === "cheese"){
                    toppingPrice = 120;
                }else if (atopping === "mushroom"){
                    toppingPrice = 140;
                }
            }
    
            if (asize === "large"){
                if (atopping === "pepperoni"){
                    toppingPrice = 120;
                }else if (atopping === "cheese"){
                    toppingPrice = 140;
                }else if (atopping === "mushroom"){
                    toppingPrice = 160;
                }
            }
            console.log("Topping costs " + toppingPrice);
            console.log("Topping costs " + toppingPrice); //test

            //crust
            if (asize === "small"){
                if (acrust === "crispy-thin"){
                    crustPrice = 150;
                }else if (acrust === "extreme-cheese"){
                    crustPrice = 170;
                }else if (acrust === "stuffed"){
                    crustPrice = 200;
                }
            }
    
            if (asize === "medium"){
                if (acrust === "crispy-thin"){
                    crustPrice = 170;
                }else if (acrust === "extreme-cheese"){
                    crustPrice = 200;
                }else if (acrust === "stuffed"){
                    crustPrice = 230;
                }
            }
    
            if (asize === "large"){
                if (acrust === "crispy-thin"){
                    crustPrice = 200;
                }else if (acrust === "extreme-cheese"){
                    crustPrice = 230;
                }else if (acrust === "stuffed"){
                    crustPrice = 250;
                }
            }
            console.log("Crust costs " + crustPrice);
            var tot = parseInt(sizePrice)+parseInt(toppingPrice)+parseInt(crustPrice);
            console.log(tot);
            var alltotal = 0;
            var cusorder = "<tr><td>" + asize + ": " + sizePrice + "</td><td>" + atopping + ": " + toppingPrice + "</td><td>" + acrust + ": " + crustPrice + "</td><td class='kes'>" + tot + "</td><td><button class='btn btn-danger btn-sm'>DEL</button></td><tr>" //here
            console.log(tot); //test
            var cusorder = "<tr><td>" + asize + ": " + sizePrice + "</td><td>" + atopping + ": " + toppingPrice + "</td><td>" + acrust + ": " + crustPrice + "</td><td class='kes'>" + tot + "</td><td><button class='btn btn-danger btn-sm'>DEL</button></td><tr>" 
            $("#customerOrder tbody").append(cusorder);
            $("#ordernow").html("Add another");

            console.log(tot);
            //here
            $("#ordernow").html("Add another");             

            //delete entry logic
            $(".btn-sm").click(function(){
                $(this).parent().parent().remove();
            })
    
            $("#checkout").click(function(){
                $(this).hide();
                $("#ordernow").fadeOut(500);
                $("#deliv").fadeIn(1000);
                $(".btn-sm").hide();
                // $("#totalcost").append("The cost is KSh." + tot);

                // let you = Array.from(parseInt($(".kes")));
                // console.log(you);

                //find total costs
                var news = document.getElementsByClassName("kes")
                var news2 = Array.from (news)
                console.log(news2.length);
                let sum = 0;
                for (let i=0; i<news2.length;i++){
                    sum+=parseInt(news2[i].innerText)
                }
                console.log(sum);
                $("#totalcost").html("The cost is KSh." + sum);

                $("#totalcost").html("The cost is KSh." + sum); 



            // let receive = $("input[name='delivery']:checked").val();
            $("#okay").click(function(){
                $("#totalcost").hide();
                $(this).hide();          

                let receive = $("input[name='delivery']:checked").val();
                console.log(receive);                
                if (receive === "Deliver"){
                    console.log(1);
                    $("#chosenlocation").show();
                    $("#done").click(function(){
                        var location = $("#location").val();
                        console.log(location);
                        $("#deliv").hide();
                        $("#chosenlocation").hide();
                        var news3 = sum + 200;
                        $("#locationdone").html("Delivery to "+location+" costs ksh. 200. <br>Total Cost is now Ksh."+news3+"<br> Wait time: 30 mins");
                    })

                    }else if (receive === "PickUp"){
                        console.log(2);
                        $("#deliv").hide();
                        $("#totalcost").show();
                        $("#locationdone").html("Av. wait time: 8 mins");
                    }
            })
        })

                $("#okay").click(function(){
                    $("#totalcost").hide();
                    $(this).hide();          

                    let receive = $("input[name='delivery']:checked").val();
                    console.log(receive);                
                    if (receive === "Deliver"){
                        console.log(1);
                        $("#chosenlocation").show();
                        $("#done").click(function(){
                            var location = $("#location").val();
                            console.log(location);
                            $("#deliv").hide();
                            $("#chosenlocation").hide();
                            var news3 = sum + 200;
                            $("#locationdone").html("Delivery to "+location+" costs ksh. 200. <br>Total Cost is now Ksh."+news3+"<br> Wait time: 30 mins");
                        })

                        }else if (receive === "PickUp"){
                            console.log(2); //test
                            $("#deliv").hide();
                            $("#totalcost").show();
                            $("#locationdone").html("Av. wait time: 8 mins");
                        }
                })

            })        

        })

    // })