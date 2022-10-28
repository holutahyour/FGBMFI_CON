jQuery(document).ready(function() {
        $(function () {
            $('#defaultCountdown').countdown({until: new Date(2022, 10, 11, 8)}); // year, month, date, hour
        });
});		

// const url = 'https://lag-fgbmfi-ng.azurewebsites.net/api/events/2'
// jQuery(document).ready(function() {
//        fetch(url)
//        .then(res => res.json())
//        .then(result => {
//         let data = result.data;
//         console.log(data);
//         $("#convHead").text(` ${data.name} <br>
//                                              `)
//         $("#theme h2").html(`<h2 class="text-white my-4" >
//                                 <span class="id-color">Theme:</span> ${data.theme}
//                            </h2> `);
        
//        })
//        .catch(err => console.log(err))
// });		

