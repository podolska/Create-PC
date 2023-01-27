//Podolska Anna
function createPhotoDescription () {
    let photoObjects = [];

    const descriptions = [
        'Фото дня', 'Упіймав кадр )))', 'Якось так...'
    ];

    for(let i = 1; i < 26; i++) {
        photoObjects.push({
            'id': i,
            'url': `photos/${i}.jpg`,
            'description': `${descriptions[(Math.floor(Math.random() * (3 - 0)) + 0)]}`,
            'likes': `${(Math.floor(Math.random() * (201 - 15)) + 15)}`,
            'comments': getComments()
        });
    };

    function getComments () {
        let comments = [];

        let randomNum = Math.floor(Math.random() * (7 - 1)) + 1;

        for(let i = 0; i < randomNum; i++) {
            comments.push({
                'id': Math.floor(Math.random() * Date.now()),
                'avatar': `img/avatar-${Math.floor(Math.random() * (7 - 1)) + 1}.svg`,
                'message': getMessages(),
                'name': getName()
            });
        };

        function getMessages () {
            const messages = [
                'Все відмінно!',
                'Загалом все непогано. Але не всі.',
                'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
                'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
                'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
                'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
            ];
            let randomMes = [];
            let randomNum = Math.floor(Math.random() * (3 - 1)) + 1;
            for(let i = 0; i < randomNum; i++) {
                randomMes.push(messages[Math.floor(Math.random() * (6 - 0)) + 0]);
            };
            return randomMes.join(' ');
        };

        function getName () {
            const names = ['Антон', 'Майк', 'Тарас', 'Юля', 'Ігор', 'Віктор'];
            return names[Math.floor(Math.random() * (6 - 0)) + 0];
        };

        return comments;
    };

    console.log(photoObjects);
};

createPhotoDescription();