let Fbsignin = () =>
{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(provider);
    })  
}