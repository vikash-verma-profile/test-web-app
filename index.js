const core= require('@actions/core');
const github=require('@actions/github')
try{
    const name=core.getInput('who-to-greet');
    console.log(`Hello ${name}`);
    const time=(new Date()).toTimeString();
    core.setOutput("time",time);
    const payload=Json.strigify(github.context.payload,undefined,2);
    console.log(`the event payload: ${payload}`);
}catch(err){
    core.setFailed(error.message);
}