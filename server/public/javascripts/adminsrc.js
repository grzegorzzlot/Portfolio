$(document).ready(()=> {

    //toggle list-group children
    const listGroup = $('.list-group .list-group-title');
    const itemGroup = $('.list-group-item.child');
    
    listGroup.on('click', function(){
        $(this).parent().find(itemGroup).toggle();
    });


    //add post
    $('#add-post').on('click', ()=>{
        $('#admin-root').load('admin/api/addPost')
    })
    $('#admin-root').on('click', '#add-post-button', ()=>{
        const title = $('#admin-root').find('#add-post-title').val();
        const text = $('#admin-root').find('#add-post-content').val();
        postData('admin/api/addPost', title, text);
    })
    const postData = (url, title, content)=>{
        let details = {
            title: title,
            content: content
        }
        //encode
        let formBody = [];
        for (var property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        console.log(formBody)
        fetch(url, {
            method: "POST",
            body: formBody,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }})
            .then(res => res.json())
            .then(res => {
                if(res.message=="Post created!") {
                    $('#admin-root').load('public/api/success');
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    //show posts
    $('body').on('click', '#add-post-button', function () {
        $('#add-post-button').load(()=>{
            console.log('sss')
        }) 
            
        
        let details = {
            title: $('#add-post-title').value,
            content: $('#add-post-content').value,
        }
        console.log(details)
        let formBody = [];
        for (var property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('/admin/api/addPost', 
            {
            method: 'POST',
            body: formBody,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => res.json())
        .then(res => {
            if(res.message=="Post created!") {
                $('#admin-root').load('public/api/success');
            }
        })
        .catch(error => console.log('error')) 
    })

    //display posts in admin mode

    $('#show-posts').on('click', ()=>{
        fetch('public/api/showPost')
        .then(()=>{
            $('#admin-root').load('public/api/showPost');
        })
        .catch((err)=>{
            console.log(err)
        })
    })
}) 