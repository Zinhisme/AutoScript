// Function to be executed every 6 hours

const authTokens = [
  "eyJ1c2VyIjp7ImlkIjo3MTk5NzQ3MTYyLCJmaXJzdF9uYW1lIjoiVHJ1bmciLCJsYXN0X25hbWUiOiJOZ3V5ZW4g8J+mtCIsInVzZXJuYW1lIjoiZGluaGlzbWUiLCJsYW5ndWFnZV9jb2RlIjoidmkiLCJhbGxvd3Nfd3JpdGVfdG9fcG0iOnRydWV9LCJjaGF0X2luc3RhbmNlIjoiLTU1NjMxMzU5ODYwNzg4MDQ4NzgiLCJjaGF0X3R5cGUiOiJjaGFubmVsIiwic3RhcnRfcGFyYW0iOiJyZWZfMTcwOTk3MDA0N18iLCJhdXRoX2RhdGUiOiIxNzIzNDQwNjM0IiwiaGFzaCI6ImExMmFjYjJjNmRkMDJiN2M0MDZiNjdmNWE0YmEzZWE4NGFhMzgzMWMxMTFhYjY0Y2M5YTg0Y2U4MDhkY2VkOTUifQ==",
  "eyJxdWVyeV9pZCI6IkFBRThXQmxvQWdBQUFEeFlHV2dLbkoycSIsInVzZXIiOnsiaWQiOjYwNDE0NTg3NDgsImZpcnN0X25hbWUiOiJOYW0iLCJsYXN0X25hbWUiOiJRdeG7kWMg8J+mtCIsInVzZXJuYW1lIjoiZGluaGlzbWUyIiwibGFuZ3VhZ2VfY29kZSI6ImVuIiwiYWxsb3dzX3dyaXRlX3RvX3BtIjp0cnVlfSwiYXV0aF9kYXRlIjoiMTcyMzQ0MzI4NSIsImhhc2giOiJlYWU0NmEyZWFjYWE0MTM5ODA4YTMzZGMyNjQ3OGZlOTE4OWUzMTI5YzViMTFlZTdmMjE1NDY2NzRlMDY2NmMxIn0=",
  "eyJ1c2VyIjp7ImlkIjo3Mjk0OTY2ODEwLCJmaXJzdF9uYW1lIjoiUGhhbSIsImxhc3RfbmFtZSI6IlRyYW5nIPCfprQiLCJ1c2VybmFtZSI6IkRpbmhpc21lNCIsImxhbmd1YWdlX2NvZGUiOiJ2aSIsImFsbG93c193cml0ZV90b19wbSI6dHJ1ZX0sImNoYXRfaW5zdGFuY2UiOiIxMDE2NDc3NDI5NDE0Nzk5MDkzIiwiY2hhdF90eXBlIjoicHJpdmF0ZSIsInN0YXJ0X3BhcmFtIjoicmVmXzcxOTk3NDcxNjJfIiwiYXV0aF9kYXRlIjoiMTcyMzQ2NDk1OCIsImhhc2giOiIyZDQxZTc3MGFjOWZiYjkyMzkxMDgyZjM0ZjAwMDc3ZGU1YzEzYmYwNzdmOWU2MmRkNzEzOTVjZTExMGY5NmQ1In0=",
  "eyJ1c2VyIjp7ImlkIjo3MjkzNjUwMDUzLCJmaXJzdF9uYW1lIjoiVGllbiIsImxhc3RfbmFtZSI6Ik5ndXllbiDwn6a0IiwidXNlcm5hbWUiOiJkaW5oaXNtZTUiLCJsYW5ndWFnZV9jb2RlIjoidmkiLCJhbGxvd3Nfd3JpdGVfdG9fcG0iOnRydWV9LCJjaGF0X2luc3RhbmNlIjoiNDAwNDExMTAwOTQyNTA5MDAyMCIsImNoYXRfdHlwZSI6InByaXZhdGUiLCJzdGFydF9wYXJhbSI6InJlZl83MTk5NzQ3MTYyXyIsImF1dGhfZGF0ZSI6IjE3MjM0NjUwNzQiLCJoYXNoIjoiNGQ1OWIxMWI3NmUyODdlNDlmNGM0MjZjNDI1YjMwNmM1ZThmZTMwNjA5OWI3ZTM5NjA4YzQzNDk2ZDczMmM4NyJ9",
  "eyJ1c2VyIjp7ImlkIjo3Mjc4NjM0MjcyLCJmaXJzdF9uYW1lIjoiVnkiLCJsYXN0X25hbWUiOiJOZ3V5ZW4g8J+mtCIsInVzZXJuYW1lIjoiYmVvbmdkZXRodW9uZyIsImxhbmd1YWdlX2NvZGUiOiJ2aSIsImFsbG93c193cml0ZV90b19wbSI6dHJ1ZX0sImNoYXRfaW5zdGFuY2UiOiI1NDMxODk3MDU5Mzg4NDM5OTUzIiwiY2hhdF90eXBlIjoicHJpdmF0ZSIsInN0YXJ0X3BhcmFtIjoicmVmXzcxOTk3NDcxNjJfIiwiYXV0aF9kYXRlIjoiMTcyMzQ2NTE0NSIsImhhc2giOiI4YjZmNTY2N2I4NDNiYjlmNzYxMjZhNzQ3MDZhNmJmYzQyM2FjNTg4M2Q5MDZjYWE3MDZhZDlkMWUzM2M3MmE3In0",
  "eyJ1c2VyIjp7ImlkIjo3NDc2MDE4MTc3LCJmaXJzdF9uYW1lIjoiTmFtIiwibGFzdF9uYW1lIjoiVHLhuqduIPCfprQiLCJ1c2VybmFtZSI6IkRpbmhpc21lMyIsImxhbmd1YWdlX2NvZGUiOiJ2aSIsImFsbG93c193cml0ZV90b19wbSI6dHJ1ZX0sImNoYXRfaW5zdGFuY2UiOiItMTA2Nzg2OTY0Nzg3ODUzODM2MyIsImNoYXRfdHlwZSI6InByaXZhdGUiLCJzdGFydF9wYXJhbSI6InJlZl83MTk5NzQ3MTYyXyIsImF1dGhfZGF0ZSI6IjE3MjM0NjU2NTIiLCJoYXNoIjoiOTgyOTMxNTFiNzU2MzgyYTRlZDhkMTY2YmRhZjg4YjUzOTU0OTg3MDY3NzA5OGU3OTE0YjMyZGU3OGQyNWE1MSJ9",
];

// const server = "api.cryptorank.io";
const server = "api.cryptorank.io";
const now = new Date();
const currentHour = now.getHours();
var task = "start-farming";
function checkActi() {
  switch (currentHour) {
    case 4:
    case 7:
    case 14:
    case 21:
      task = `end-farming`;
      performAction();
      break;

    case 8:
    case 15:
    case 22:
      task = `start-farming`;
      performAction();
      break;

    // Optional: You can add a default case to handle other hours if needed
    default:
      console.log("No action required at this hour.");
      break;
  }
}

function performAction() {
  console.log("This action will repeat every 7 hours.");

  authTokens.forEach((authToken) => {
    const url = `https://${server}/v0/tma/account/${task}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data + "TRẠNG THÁI: " + `${task}` + "hour: " + currentHour);
      })
      .catch((error) => {
        console.error(
          error + "TRẠNG THÁI: " + `${task}` + "hour: " + currentHour
        );
      });
  });
}

// Set interval to 6 hours (21,600,000 milliseconds)
setInterval(checkActi, 3600000);

// Optionally, you can run the function immediately when the page loads
checkActi();
