// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.




// let url=`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=1ba56eccaa9ef5022b51eb3b95ef2fb3`

// let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

// function getWeather(city) {
//   let apikey = "1ba56eccaa9ef5022b51eb3b95ef2fb3";
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
//   )
//     .then((raw) => raw.json())
//     .then((result) => {
//       console.log(result);
//     });
// }
// getWeather("London");

// async function getWeather(city) {
//   try {
//     let apikey = "1ba56eccaa9ef5022b51eb3b95ef2fb3";
//     let raw = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
//     );  
    
//     if (!raw.ok) {
//       // console.log(err.message);
//       throw new Error("City not found,try something else.");
//     }
//     let realdata = await raw.json();
//     if(realdata.main.temp<300){
//         console.log(`Too Cool out there...${realdata.main.temp}`);
//     }
//     else{
//         console.log(realdata);
//     }

//   } catch (err) {
//     console.log(err.message);
//   }
// }
// getWeather("Agra");





// .................................................................
// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.



const user=[
    "akash@gmail.com","sarthak@gmail.com","Piyush@gmail.com"
];


function sendEmail(email) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 5);

        setTimeout(() => {
            let probability = Math.floor(Math.random() * 10);
            if (probability <= 5) {
                resolve(`Email successfully sent to ${email}`);
            } else {
                reject(`Failed to send email to ${email}`);
            }
        }, time * 1000);
    });
}

// sendEmail("Harsh@gmail.com")
//     .then(console.log)
//     .catch(console.error);

async function sendEmails(userlist){
    let allresponses=userlist.map(function(email){
        return sendEmail(email)
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        })
    })
    // console.log(allresponses);
    let ans = await Promise.all(allresponses);
    // console.log(ans);
    ans.forEach(function(status){
        console.log(status);
    })
    
}
sendEmails(user);
