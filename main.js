client.on("message", async (message) => {
    if (message.content == "ubb" && message.author.id === "753842258457002036") { // Use this command only once and only on one channel.
    let buttons = new disbut.MessageButton()
        .setStyle('red') // Button Color
        .setLabel('JavaScript') // Button Name 
        .setID('Button2') // Button ID
       let buttons2 = new disbut.MessageButton()
         .setStyle('blruple')
         .setLabel('Alt Yapı')
         .setID('Button3')
       let buttons3 = new disbut.MessageButton()
         .setStyle('green')
         .setLabel('Linkler')
         .setID('Button4')
    message.channel.send('> <@&843501750248800257> Rolü Almak için ( JavaScript ) Tepkisine tıklayınız
> <@&843501844025180258> Rolü Almak için ( Alt Yapı ) Tepkisine tıklayınız
> <@&843501854067523594> Rolü almak için ( Linkler ) Tepkisine tıklayınız', { buttons: [buttons], [buttons2], [buttons3]});
    };
});

client.on('clickButton', async (button) => {
    if (button.id === 'Button2') { // You must enter the button ID in the 'Button' sections.
        if (button.clicker.member.roles.cache.get("Roles ID")) {
            await button.clicker.member.roles.remove("Roles ID")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} JavaScript Rolünü verdim!`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        } else {
            await button.clicker.member.roles.add("Roles ID")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} The role was given because you clicked the button.`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        }
    }
});

client.on('clickButton', async (button) => {
    if (button.id === 'Button3') { // You must enter the button ID in the 'Button' sections.
        if (button.clicker.member.roles.cache.get("Roles ID")) {
            await button.clicker.member.roles.remove("Roles ID")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} The role was taken because you clicked the button.!`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        } else {
            await button.clicker.member.roles.add("Roles ID")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} The role was given because you clicked the button.`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        }
    }
});

client.on('clickButton', async (button) => {
    if (button.id === 'Button4') { // You must enter the button ID in the 'Button' sections.
        if (button.clicker.member.roles.cache.get("Roles ID")) {
            await button.clicker.member.roles.remove("Roles ID")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} The role was taken because you clicked the button.!`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        } else {
            await button.clicker.member.roles.add("Roles ID")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} The role was given because you clicked the button.`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        }
    }
});
