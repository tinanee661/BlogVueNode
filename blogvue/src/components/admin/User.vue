@@ -0,0 +1,125 @@
<template>
    <div>
         <div class="main-container">
            <div class="container">
                <div class="title">
                    <h1> Remove Users</h1> 
                </div>
            </div>
            <div class="content">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Admin</td>
                            <td>Last Name</td>
                            <td>admin@email.com</td>
                            <td>adminn</td>
                            <td><a href="">Remove</a></td>
                        </tr>
                        <tr>
                            <td>Admin1</td>
                            <td>Last Name1</td>
                            <td>admin1@email.com</td>
                            <td>adminn1</td>
                            <td><a href="">Remove</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>

  .title{
    width: 100%;
   text-align: center;
   margin-top:15px;
   color:rgba(182,134,142,0.979);
   letter-spacing: .3em;
   font-size:2.0vw;
   font-weight: normal; 
   text-transform: uppercase;
   
}

 h1 {
   width: 100%;
   text-align: center;
   margin-top:50px;
   color:rgba(182,134,142,0.979);
   letter-spacing: .3em;
   font-size:3.5vw;
   font-weight: normal;
   text-transform: uppercase;
 }
.main-container{
    margin: 0 auto;
    font-size: 1vmax;
    background-color: whitesmoke;
    height: 100vh;
}
.content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
table {
    background-color: white;
    border: 1px solid black;
    margin: 50px;
    width: 90%;
}
  
th {
    background-color:rgb(182,134,142,0.979);
    color: white;
    height: 30px;
}
td {
    height: 30px;
    vertical-align: bottom;
}
th, td {
    padding: 5px;  
}



#button{
    color: black;
    border-radius: 1px;
    background-color: rgba(182,134,142,0.979);
    width: auto;
    height:33px;
    cursor: pointer;
    padding: 10px;
}

#button:hover{
    background-color: #ecd5d9;
    
}


tr:hover {background-color: #f5f5f5;}

@media only screen and (max-width: 1024px){

    td,th{
     font-size: 12px;
    }
}
</style>