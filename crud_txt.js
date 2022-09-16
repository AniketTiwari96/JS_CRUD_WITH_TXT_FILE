
const fs=require('fs');
const input=require('readline-sync');
console.log('what do you want ');
console.log(`\npress 1 for create\npress 2 for read\npress 3 for update\npress 4 for delete\npress 5 for exist\n`);

const cheakgmail=()=>{
    let email = input.question(`Plese enter your gmail id => `)
    if ( email.includes('@') && (email.includes('gmail.com'))) {
        console.log(` your gmail is right `);
        return email;
    }else{
        console.log(`\nYour gmail id is wrong.\nPlease enter your right gmail id\n` );
        return cheakgmail();
    }
}
const Mo_Number=()=>{
    const M_Number=input.question('Please enter your mobile number => ');
    if(M_Number.length == '10'){
        return M_Number;
    }else{
        console.log('Your mobile number lenght is not right\nPlease enter your right mobile number ');
        return Mo_Number();
    }
}

const create =()=>{
    if(fs.existsSync('file.txt')){
        const data=fs.readFileSync('file.txt','utf-8');
        let email=cheakgmail();
        if(data.includes(email)){
            console.log(`Your gmail data is already have `);
        }else{
            let user_id=input.question('Please enter your user id => ');
            let first_name=input.question('enter your first name => ');
            let last_name=input.question('Please enter your last name => ');
            let age=input.questionInt('enter your age =>');
            let M_Number1=Mo_Number();
            fs.appendFileSync('file.txt',`[${email},${user_id},${first_name},${last_name},${age},${M_Number1}]\n`)
            console.log('data is done');
        }
    }else{
        fs.createWriteStream("file.txt");
        create();
    }
}

const read=()=>{
    const data=fs.readFileSync('file.txt','utf-8');
    console.log('your full data',data);
}

const update=()=>{
    const data=fs.readFileSync('file.txt','utf-8');

    const check = data.split('\n')
    console.log('cheak data ',check)
    
    const email=cheakgmail(); 
    let ind = null
    for (let i in check) {
        if (check[i].includes('['.concat(email))){
            ind = i
            break
        };
    };
    console.log(ind, 'last')
    if(ind != -1 && ind != null){
        const userData = check[ind]
        // console.log(`index number ${ind} and index data ${userData}`);
        // return
        const dataArray = userData.split(',')
        // console.log(typeof dataArray)
        // console.log('your gmail data ',dataArray);
        // return
        console.log('\nWhat do you want to update ');
        console.log(`\npress 1. for user id update,\npress 2. for first name update.\npress 3. for last name update.\npress 4. for age update.\npress 5. for mobile number update.\npress 6. for all data update.\npress 7.for exit.\n`);
        const choice=input.questionInt(' Please enter your choice => ');
        if(choice === 1){
            dataArray[1]=input.question('Please enter your new user id => ');
            const joi=dataArray.join(',');
            check[ind]=joi;
            finalData=check.join('\n')
        }else if(choice === 2){
            dataArray[2]=input.question('Please enter your new first name => ');
            const joi=dataArray.join(',')
            check[ind]=joi;
            finalData=check.join('\n');
        }else if (choice === 3){
            dataArray[3]=input.question('Please enter your new last name => ');
            const joi=dataArray.join(',')
            check[ind]=joi;
            finalData=check.join('\n');
        }else if ( choice === 4){
            dataArray[4]=input.question('Please enter your new  age => ');
            const joi=dataArray.join(',')
            check[ind]=joi;
            finalData=check.join('\n');
        }else if(choice === 5){
            num=Mo_Number();
            dataArray[5] = num.concat(']')
            const joi=dataArray.join(',');
            check[ind]=joi;
            finalData=check.join('\n');
            console.log(check, '//////');
        }else if(choice === 6){
            dataArray[1]=input.question('Please enter your new user id => ');
            dataArray[2]=input.question('Please enter your new first name => ');
            dataArray[3]=input.question('Please enter your new last name => ');
            dataArray[4]=input.questionInt('Please enter your new age => ');
            dataArray[5]=Mo_Number();
            const joi=dataArray.join(',');
            check[ind]=joi;
            finalData=check.join(']'.concat('\n'));
        }else if(choice === 7){
            console.log('Your program is stop ');
            process.exit();
        }
        fs.writeFileSync('file.txt',finalData);
        console.log('Your data is updated ;');
    }else{
        console.log('your gmail is not exit ');
        update();
    }

}
const Delete=()=>{
    const data=fs.readFileSync('file.txt','utf-8');
    check=data.split('\n');
    console.log(check)
    const email=cheakgmail();
    let ind = null
    for (let i in check) {
        if (check[i].includes('['.concat(email))){
            ind = i
            break
        }
    }
    console.log(ind, 'Your index');
    if(ind != -1 && ind != null){
        const userData=check[ind];
        console.log('Your index data ',userData);
        const dataArray=userData.split(',');
        console.log('index data ko split kiya ',dataArray);
        
        console.log('\nWhat do you want to update ');
        console.log(`\npress 1. for user id delete,\npress 2. for first name delete.\npress 3. for last name delete.\npress 4. for age delete.\npress 5. for mobile number delete.\npress 6. for all data delete.\npress 7.for exit.\n`);
        const choice=input.questionInt('Please enter your choice => ');
        if( choice === 1){
            dataArray[1]='undefined';
            const d = dataArray.join(',')
            check[ind]=d
            const finalData = check.join('\n')
            fs.writeFileSync('file.txt',finalData)
            console.log('your data is deleted ');
        }else if( choice === 2 ){
            dataArray[2]='undefined';
            const d = dataArray.join(',')
            check[ind]=d
            const finalData = check.join('\n')
            fs.writeFileSync('file.txt',finalData)
            console.log('your data is deleted ');
        }else if( choice === 3 ){
            dataArray[3]='undefined';
            const d = dataArray.join(',')
            check[ind]=d
            const finalData = check.join('\n')
            fs.writeFileSync('file.txt',finalData)
            console.log('your data is deleted ');
        }else if( choice === 4 ){
            dataArray[4]='undefined';
            const d = dataArray.join(',')
            check[ind]=d
            const finalData = check.join('\n')
            fs.writeFileSync('file.txt',finalData)
            console.log('your data is deleted ');
        }else if( choice === 5 ){
            dataArray[5]='undefined';
            const d = dataArray.join(',')
            check[ind]=d
            const finalData = check.join('\n')
            fs.writeFileSync('file.txt',finalData)
            console.log('your data is deleted ');

        }else if( choice === 6 ){
            check.splice(ind,1)
            fs.writeFileSync('file.txt',check);
            console.log('your data is deleted ');
        }else if( choice === 7 ){
            console.log('Your program is stoped ;');
            process.exit();
        }
    }
}


const choice=input.questionInt('Please enter your choice => ');
if( choice === 1 ){
    create();
}else if( choice === 2 ){
    read();
}else if( choice === 3 ){
    update();
}else if( choice === 4 ){
    Delete();
}else if( choice === 5 ){
    process.exit();
}


