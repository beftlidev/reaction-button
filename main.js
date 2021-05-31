client.on("message", async (message) => {
    if (message.content == "-javascript" && message.author.id === "753842258457002036") { // Use this command only once and only on one channel.
    let buttons = new disbut.MessageButton()
        .setStyle('red') // Button Color
        .setLabel('JavaScript') // Button Name 
        .setID('Button2') // Button ID
    message.channel.send('> <@&843501750248800257> Rolü Almak için ( JavaScript ) Butonuna tıklayınız.', { buttons: buttons});
    };
});

client.on("message", async (message) => {
    if (message.content == "-altyapı" && message.author.id === "753842258457002036") {
       let buttons2 = new disbut.MessageButton()
         .setStyle('blruple')
         .setLabel('Alt Yapı')
         .setID('Button3')
message.channel.send(`> <@&843501844025180258> Rolü Almak için ( Alt Yapı ) Butonuna tıklayınız.`, { buttons: buttons2 }) 
};
});

client.on("message", async (message) => {
    if (message.content == "-linkler" && message.author.id === "753842258457002036") {
       let buttons3 = new disbut.MessageButton()
         .setStyle('green')
         .setLabel('Linkler')
         .setID('Button4')
message.channel.send(`> <@&843501854067523594> Rolü almak için ( Linkler ) Butonuna tıklayınız.`, { buttons: buttons3 })
};
});
client.on('clickButton', async (button) => {
    if (button.id === 'Button2') { // You must enter the button ID in the 'Button' sections.
        if (button.clicker.member.roles.cache.get("843501750248800257")) {
            await button.clicker.member.roles.remove("843501750248800257")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} JavaScript Rolünü verdim!`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        } else {
            await button.clicker.member.roles.add("843501750248800257")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} JavaScript Rolünü verdim!`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        }
    }
});
client.on('clickButton', async (button) => {
    if (button.id === 'Button3') { // You must enter the button ID in the 'Button' sections.
        if (button.clicker.member.roles.cache.get("843501844025180258")) {
            await button.clicker.member.roles.remove("843501844025180258")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} The role was taken because you clicked the button.!`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        } else {
            await button.clicker.member.roles.add("843501844025180258")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} Alt Yapı Rolünü verdim!`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        }
    }
});
client.on('clickButton', async (button) => {
    if (button.id === 'Button4') { // You must enter the button ID in the 'Button' sections.
        if (button.clicker.member.roles.cache.get("843501854067523594")) {
            await button.clicker.member.roles.remove("843501854067523594")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} The role was taken because you clicked the button.!`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        } else {
            await button.clicker.member.roles.add("843501854067523594")
            button.defer(true)
            await button.channel.send(`${button.clicker.user.tag} Linkler Rolünü verdim!`).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);
        }
    }
});
