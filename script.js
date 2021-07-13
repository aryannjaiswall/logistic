const counters = document.querySelectorAll('.counterNumber')
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target'); //+ is used to convert string into number
        const count = +counter.innerText; //+ is used to convert string into number

        const inc = target / speed;

        if(count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1)
        }
        else {
            count.innerText = target;
        }
    }

    updateCount();
})


