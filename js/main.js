const userWeight = document.querySelector('.input-data__input-text--weight');
const userHeight = document.querySelector('.input-data__input-text--height');
const userAge = document.querySelector('.input-data__input-text--age');
const showBmi = document.querySelector('.bmi-score-title');
const descriptionBmi = document.querySelector('.bmi-score-p-description');
const recommendationsBmi = document.querySelector('.bmi-score-p-recommendations');
const blocked1 = document.querySelector('.blocked1');
const blocked2 = document.querySelector('.blocked2');
const blocked3 = document.querySelector('.blocked3');
const bmiTitle = document.querySelector('.bmi-score__name');
const img1 = document.querySelector('.bmi-score-img--1');
const img2 = document.querySelector('.bmi-score-img--2');
const img3 = document.querySelector('.bmi-score-img--3');
const nutrientsTitleFirst = document.querySelector('.nutrients__title--first');
const nutrientsTitleSecond = document.querySelector('.nutrients__title--second');
const nutrientsTitleThird = document.querySelector('.nutrients__title--third');
const nutrientsTextFirst = document.querySelector('.nutrients__text--first');
const nutrientsTextSecond = document.querySelector('.nutrients__text--second');
const nutrientsTextThird = document.querySelector('.nutrients__text--third');
const popupFirst = document.querySelector('.popup-one');
const popupTwo = document.querySelector('.popup-two');
const textKg = document.querySelector('.input-data__chcek-input-weight');
const textCm = document.querySelector('.input-data__chcek-input-height');
const textAge = document.querySelector('.input-data__chcek-input-age'); 
const selectList = document.getElementById('option-list');
const bmrInfo1 = document.querySelector('.calories-score__bmr-info-1');
const bmrInfo2 = document.querySelector('.calories-score__bmr-info-2');
const laying = document.querySelector('.laying');
const sitting = document.querySelector('.sitting');
const standing = document.querySelector('.standing');
const marchSlow = document.querySelector('.march_slow');
const marchFast = document.querySelector('.march_fast');
const running = document.querySelector('.running');
const climbing = document.querySelector('.climbing');
const chores = document.querySelector('.chores');
const clearingSnow = document.querySelector('.clearing_snow');
const letters = /[a-z]/i;
const special = /[!@#$%^&*()]/;
let bmi;
let fats;
let fatsNas;
let carbohydrates;
let sugars;
let protein;
let gender;
let bmrWomen;
let bmrMen;
let calories;

// BMI CALCULATION
const bmiCalculate = () => {
    bmi = ((userWeight.value) / (userHeight.value / 100) ** 2).toFixed(2);

    if(bmi < 16){
        showBmi.innerHTML = "WYGŁODZENIE";
        descriptionBmi.innerHTML = "Wygłodzenie określa stan masy ciała poniżej wartości uznanych za prawidłowe dla osób o danym wzroście, płci i wieku. Spowodowana jest utrzymującym się ujemnym bilansem energetycznym. Jej skutki to między innymi niewydolność fizyczna, szybkie męczenie się, apatia, sucha skóra oraz zaburzenia miesiączkowania. Zawsze należy rozpoznać przyczynę zbyt małej masy ciała (bardzo często są nią choroby metaboliczne lub pasożyty) i rozpocząć od jej leczenia. Leczenie żywieniowe niedowagi i niedożywienia jest niezbędne w celu odzyskania zdrowia. Jak najszybciej skontaktuj się z dietetykiem!";
        recommendationsBmi.innerHTML = "Jak zwiększyć masę ciała? <br><br> 1) Posiłki należy spożywać w mniejszych porcjach i często. Najlepiej 4-5 posiłków w ciągu dnia. <br> 2) Dostarczać białko pełnowartościowe w każdym posiłku. Najlepsze jego źródła to: chude mięso i wędliny, ryby, jaja, jogurty naturalne, twarogi. <br> 3) Polecane są zdrowe przekąski takie jak: orzechy, banany, winogrona, owoce suszone, awokado. Słodycze hamują apetyt, są mało-odżywcze i próchnicotwórcze. <br> 4) Nie polecane są produkty i potrawy smażone, zwłaszcza w głębokim tłuszczu, fast foody, produkty wędzone. <br> 5) Wskazana jest umiarkowana aktywność fizyczna, dla utrzymania dobrej formy. Wysiłek fizyczny pobudza apetyt.";
        img1.style.display = "block";
        img2.style.display = "none";
        img3.style.display = "none";
    } else if(bmi >= 16 && bmi <= 16.99) {
        showBmi.innerHTML = "WYCHUDZENIE";
        descriptionBmi.innerHTML = "Wychudzenie określa stan masy ciała poniżej wartości uznanych za prawidłowe dla osób o danym wzroście, płci i wieku. Spowodowana jest utrzymującym się ujemnym bilansem energetycznym. Jej skutki to między innymi niewydolność fizyczna, szybkie męczenie się, apatia, sucha skóra oraz zaburzenia miesiączkowania. Zawsze należy rozpoznać przyczynę zbyt małej masy ciała (bardzo często są nią choroby metaboliczne lub pasożyty) i rozpocząć od jej leczenia. Leczenie żywieniowe niedowagi i niedożywienia jest niezbędne w celu odzyskania zdrowia. Jak najszybciej skontaktuj się z dietetykiem!";
        recommendationsBmi.innerHTML = "Jak zwiększyć masę ciała? <br><br> 1) Posiłki należy spożywać w mniejszych porcjach i często. Najlepiej 4-5 posiłków w ciągu dnia. <br> 2) Dostarczać białko pełnowartościowe w każdym posiłku. Najlepsze jego źródła to: chude mięso i wędliny, ryby, jaja, jogurty naturalne, twarogi. <br> 3) Polecane są zdrowe przekąski takie jak: orzechy, banany, winogrona, owoce suszone, awokado. Słodycze hamują apetyt, są mało-odżywcze i próchnicotwórcze. <br> 4) Nie polecane są produkty i potrawy smażone, zwłaszcza w głębokim tłuszczu, fast foody, produkty wędzone. <br> 5) Wskazana jest umiarkowana aktywność fizyczna, dla utrzymania dobrej formy. Wysiłek fizyczny pobudza apetyt.";
        img1.style.display = "block";
        img2.style.display = "none";
        img3.style.display = "none";
    } else if(bmi >= 17 && bmi <= 18.49) {
        showBmi.innerHTML = "NIEDOWAGA";
        descriptionBmi.innerHTML = "Niedowaga określa stan masy ciała poniżej wartości uznanych za prawidłowe dla osób o danym wzroście, płci i wieku. Spowodowana jest utrzymującym się ujemnym bilansem energetycznym. Jej skutki to między innymi niewydolność fizyczna, szybkie męczenie się, apatia, sucha skóra oraz zaburzenia miesiączkowania. Zawsze należy rozpoznać przyczynę zbyt małej masy ciała (bardzo często są nią choroby metaboliczne lub pasożyty) i rozpocząć od jej leczenia. Leczenie żywieniowe niedowagi i niedożywienia jest niezbędne w celu odzyskania zdrowia. Jak najszybciej skontaktuj się z dietetykiem!";
        recommendationsBmi.innerHTML = "Jak zwiększyć masę ciała? <br><br> 1) Posiłki należy spożywać w mniejszych porcjach i często. Najlepiej 4-5 posiłków w ciągu dnia. <br> 2) Dostarczać białko pełnowartościowe w każdym posiłku. Najlepsze jego źródła to: chude mięso i wędliny, ryby, jaja, jogurty naturalne, twarogi. <br> 3) Polecane są zdrowe przekąski takie jak: orzechy, banany, winogrona, owoce suszone, awokado. Słodycze hamują apetyt, są mało-odżywcze i próchnicotwórcze. <br> 4) Nie polecane są produkty i potrawy smażone, zwłaszcza w głębokim tłuszczu, fast foody, produkty wędzone. <br> 5) Wskazana jest umiarkowana aktywność fizyczna, dla utrzymania dobrej formy. Wysiłek fizyczny pobudza apetyt.";
        img1.style.display = "block";
        img2.style.display = "none";
        img3.style.display = "none";
    } else if(bmi >= 18,5 && bmi <= 24.99) {
        showBmi.innerHTML = "OPTIMUM";
        descriptionBmi.innerHTML = "Gratulacje! Twoje BMI mieści się w widełkach idealnej proporcji masy do wzrostu. To nie oznacza jednak, że możesz spocząć na laurach. Dbaj o swój bilans energetyczny i dostarczaj organizmowi wszystkich niezbędnych składników odżywczych. Pamiętaj też o regularnych ćwiczeniach – w zdrowym ciele zdrowy duch!";
        recommendationsBmi.innerHTML = "Jak utrzymać masę ciała? <br><br> Jedz tylko wtedy, gdy odczuwasz głód. <br> Wybieraj zdrowe napoje i przekąski. <br> Znajdź czas na codzienne ćwiczenia fizyczne. <br> Jedz przy stole zamiast przed komputerem czy telewizorem. <br> Wybieraj odpowiednie porcje pożywienia.";
        img1.style.display = "none";
        img2.style.display = "block";
        img3.style.display = "none";
    } else if(bmi >= 25 && bmi <= 29.99) {
        showBmi.innerHTML = "NADWAGA";
        descriptionBmi.innerHTML = "Nadwaga określa stan masy ciała powyżej wartości uznanych za prawidłowe dla osób o danym wzroście, płci i wieku. Spowodowana jest utrzymującym się dodatnim bilansem energetycznym. W genomie ludzkim dominują geny, które sprzyjają magazynowaniu energii w tkance tłuszczowej. Dawniej cecha taka była korzystna z punktu widzenia szans na przeżycie i rozmnażanie, dziś jednak skazuje wiele osób na otyłość. Nie jest to jednak ostateczny wyrok!  Mając taką wiedzę powinniśmy nauczyć się, jak unikać powstawania zbędnej nadwyżki energii w naszym ciele.";
        recommendationsBmi.innerHTML = "Jak zmniejszyć masę ciała? <br><br> 1) Zalecany jest częsty i intensywny wysiłek fizyczny, taki jak marsz, jazda na rowerze, na nartach, gimnastyka lub/i pływanie. <br> 2) Woda powinna stanowić podstawowy napój, unikać należy napojów słodzonych takich jak np. cola. <br> 3) Korzystaj z tabeli IS (indeksu sytości) by wybrać pokarmy sycące, lecz ubogie energetycznie by zapobiegać atakom głodu i tak zwanemu efektowi jo-jo. <br> 4) Pamiętaj, że w przypadku ujemnego bilansu energetycznego tempo metabolizmu spada nawet o 15%, miej to na uwadze planując swoją dietę! <br> 5) Diety mające na celu zmniejszenie masy ciała są bardzo indywidualne, dlatego warto skontaktować się z dietetykiem.";
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "block";
    } else if(bmi >= 30 && bmi <= 34.99) {
        showBmi.innerHTML = "OTYŁOŚĆ I STOPNIA";
        descriptionBmi.innerHTML = "Otyłość I stopnia określa stan masy ciała powyżej wartości uznanych za prawidłowe dla osób o danym wzroście, płci i wieku. Spowodowana jest utrzymującym się dodatnim bilansem energetycznym. W genomie ludzkim dominują geny, które sprzyjają magazynowaniu energii w tkance tłuszczowej. Dawniej cecha taka była korzystna z punktu widzenia szans na przeżycie i rozmnażanie, dziś jednak skazuje wiele osób na otyłość. Nie jest to jednak ostateczny wyrok!  Mając taką wiedzę powinniśmy nauczyć się, jak unikać powstawania zbędnej nadwyżki energii w naszym ciele.";
        recommendationsBmi.innerHTML = "Jak zmniejszyć masę ciała? <br><br> 1) Zalecany jest częsty i intensywny wysiłek fizyczny, taki jak marsz, jazda na rowerze, na nartach, gimnastyka lub/i pływanie. <br> 2) Woda powinna stanowić podstawowy napój, unikać należy napojów słodzonych takich jak np. cola. <br> 3) Korzystaj z tabeli IS (indeksu sytości) by wybrać pokarmy sycące, lecz ubogie energetycznie by zapobiegać atakom głodu i tak zwanemu efektowi jo-jo. <br> 4) Pamiętaj, że w przypadku ujemnego bilansu energetycznego tempo metabolizmu spada nawet o 15%, miej to na uwadze planując swoją dietę! <br> 5) Diety mające na celu zmniejszenie masy ciała są bardzo indywidualne, dlatego warto skontaktować się z dietetykiem.";
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "block";
    } else if(bmi >= 35 && bmi <= 39.99) {
        showBmi.innerHTML = "OTYŁOŚĆ II STOPNIA";
        descriptionBmi.innerHTML = "Otyłość II stopnia określa stan masy ciała powyżej wartości uznanych za prawidłowe dla osób o danym wzroście, płci i wieku. Spowodowana jest utrzymującym się dodatnim bilansem energetycznym. W genomie ludzkim dominują geny, które sprzyjają magazynowaniu energii w tkance tłuszczowej. Dawniej cecha taka była korzystna z punktu widzenia szans na przeżycie i rozmnażanie, dziś jednak skazuje wiele osób na otyłość. Nie jest to jednak ostateczny wyrok!  Mając taką wiedzę powinniśmy nauczyć się, jak unikać powstawania zbędnej nadwyżki energii w naszym ciele.";
        recommendationsBmi.innerHTML = "Jak zmniejszyć masę ciała? <br><br> 1) Zalecany jest częsty i intensywny wysiłek fizyczny, taki jak marsz, jazda na rowerze, na nartach, gimnastyka lub/i pływanie. <br> 2) Woda powinna stanowić podstawowy napój, unikać należy napojów słodzonych takich jak np. cola. <br> 3) Korzystaj z tabeli IS (indeksu sytości) by wybrać pokarmy sycące, lecz ubogie energetycznie by zapobiegać atakom głodu i tak zwanemu efektowi jo-jo. <br> 4) Pamiętaj, że w przypadku ujemnego bilansu energetycznego tempo metabolizmu spada nawet o 15%, miej to na uwadze planując swoją dietę! <br> 5) Diety mające na celu zmniejszenie masy ciała są bardzo indywidualne, dlatego warto skontaktować się z dietetykiem.";
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "block";
    } else if(bmi >= 40) {
        showBmi.innerHTML = "OTYŁOŚĆ III STOPNIA";
        descriptionBmi.innerHTML = "Otyłość III stopnia określa stan masy ciała powyżej wartości uznanych za prawidłowe dla osób o danym wzroście, płci i wieku. Spowodowana jest utrzymującym się dodatnim bilansem energetycznym. W genomie ludzkim dominują geny, które sprzyjają magazynowaniu energii w tkance tłuszczowej. Dawniej cecha taka była korzystna z punktu widzenia szans na przeżycie i rozmnażanie, dziś jednak skazuje wiele osób na otyłość. Nie jest to jednak ostateczny wyrok!  Mając taką wiedzę powinniśmy nauczyć się, jak unikać powstawania zbędnej nadwyżki energii w naszym ciele.";
        recommendationsBmi.innerHTML = "Jak zmniejszyć masę ciała? <br><br> 1) Zalecany jest częsty i intensywny wysiłek fizyczny, taki jak marsz, jazda na rowerze, na nartach, gimnastyka lub/i pływanie. <br> 2) Woda powinna stanowić podstawowy napój, unikać należy napojów słodzonych takich jak np. cola. <br> 3) Korzystaj z tabeli IS (indeksu sytości) by wybrać pokarmy sycące, lecz ubogie energetycznie by zapobiegać atakom głodu i tak zwanemu efektowi jo-jo. <br> 4) Pamiętaj, że w przypadku ujemnego bilansu energetycznego tempo metabolizmu spada nawet o 15%, miej to na uwadze planując swoją dietę! <br> 5) Diety mające na celu zmniejszenie masy ciała są bardzo indywidualne, dlatego warto skontaktować się z dietetykiem.";
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "block";
    };
};

// GENDER
const chooseGender = () => {
    if (sexMale.checked) {
        return "men";
    } else {
        return "women";
    };
};

// ACTIVITY
const chooseActivity = () => {
    return selectList.selectedIndex;
};

// CALCULATION BMR
const bmrCalculateWomen = () => {
    bmrWomen = (655 + (9.6 * userWeight.value) + (1.8 * userHeight.value) - (4.7 * userAge.value)).toFixed(0);
    return bmrWomen;
};
const bmrCalculateMen = () => {
    bmrMen = (66 + (13.7 * userWeight.value) + (5 * userHeight.value) - (6.8 * userAge.value)).toFixed(0);
    return bmrMen;
};

// GENERATE BMR
const generateBmr = () => {
    if(chooseGender() == "men") {
        bmrInfo1.innerHTML = `Twoje BMR według metody Harrisa-Benedicta wynosi: <strong>${bmrCalculateMen()}kcal</strong>`;
        return bmrCalculateMen();
    } else {
        bmrInfo1.innerHTML = `Twoje BMR według metody Harrisa-Benedicta wynosi: <strong>${bmrCalculateWomen()}kcal</strong>`;
        return bmrCalculateWomen();
    };
};

// CALCULATION AND GENEREATE DAILY DEMAND
const generateDailyDemand = () => {
    switch(chooseActivity()){
        case 0:
            calories = generateBmr() * 1.2;
            bmrInfo2.innerHTML = `Twoje przewidywane dzienne zapotrzebowanie kaloryczne wynosi: <strong>${calories.toFixed(0)}kcal</strong>`;
            return calories;
        case 1:
            calories = generateBmr() * 1.375;
            bmrInfo2.innerHTML = `Twoje przewidywane dzienne zapotrzebowanie kaloryczne wynosi: <strong>${calories.toFixed(0)}kcal</strong>`;
            return calories;
        case 2:
            calories = generateBmr() * 1.55;
            bmrInfo2.innerHTML = `Twoje przewidywane dzienne zapotrzebowanie kaloryczne wynosi: <strong>${calories.toFixed(0)}kcal</strong>`;
            return calories;
        case 3:
            calories = generateBmr() * 1.725;
            bmrInfo2.innerHTML = `Twoje przewidywane dzienne zapotrzebowanie kaloryczne wynosi: <strong>${calories.toFixed(0)}kcal</strong>`;
            return calories;
        case 4:
            calories = generateBmr() * 1.9;
            bmrInfo2.innerHTML = `Twoje przewidywane dzienne zapotrzebowanie kaloryczne wynosi: <strong>${calories.toFixed(0)}kcal</strong>`;
            return calories;
    };
};

// NUTRIENTS CALCULATION AND SHOW
const nutrientsShow = () => {
    fats = (((generateDailyDemand() * 0.3) / 9)).toFixed(0);
    fatsNas = ((((generateDailyDemand() * 0.3) / 9) * 0.2857)).toFixed(0);
    carbohydrates = (((generateDailyDemand() * 0.6) / 4)).toFixed(0);
    sugars = ((((generateDailyDemand() * 0.6) / 4) / 3)).toFixed(0);
    protein = (((generateDailyDemand() * 0.1) / 4)).toFixed(0);
    nutrientsTitleFirst.innerHTML = `Twoje zapotrzebowanie na tłuszcze to około ${fats}g <br> (W tym ${fatsNas}g kwasów nasyconych)`;
    nutrientsTextFirst.innerHTML = `Tłuszcze są głównym źródłem glicerolu i kwasów tłuszczowych, z których organizm syntezuje inne lipidy. Niektóre kwasy tłuszczowe biorą także udział w syntezie niektórych hormonów tkankowych, m.in. prostaglandyn. Ich źródła to między innymi: ryby, nasiona, orzechy, oliwa z oliwek.`;
    nutrientsTitleSecond.innerHTML = `Twoje zapotrzebowanie na węglowodany to około ${carbohydrates}g <br> (W tym ${sugars}g jednocukrów i dwucukrów)`;
    nutrientsTextSecond.innerHTML = `Węglowodany są głównym źródłem energii naszego organizmu. Są również w mniejszym stopniu materiałem budulcowym komórek. Ich źródła to między innymi: owoce, warzywa, zboża, miód.`;
    nutrientsTitleThird.innerHTML = `Twoje zapotrzebowanie na białko to około ${protein}g`;
    nutrientsTextThird.innerHTML = `Białka to podstawowy materiał budulcowy naszego ciała. Znajdują się w każdej części organizmu oprócz żółci i moczu. Są one nam potrzebne również ze względu na to, że dostarczają aminokwasów egzogennych, czyli takich, których człowiek sam nie jest w stanie wytworzyć. Ich źródła to między innymi: mięso, jaja, produkty mleczne, nasiona roślin strączkowych.`;
};

// CHECK INPUT WEIGHT
const checkInputWeight = () => {
    if(userWeight.value.match(letters)) {
        textKg.innerHTML = "<span class='distinction'>Litery są niedozwolone!</span>";
        return false;
    } else if(userWeight.value.match(special)) {
        textKg.innerHTML = "<span class='distinction'>Znaki specjalne są niedozwolone!</span>";
        return false;
    } else if(userWeight.value > 560){
        textKg.innerHTML = "<span class='distinction'>Człowiek z taką wagą nie istnieje.</span>";
        return false;
    } else if(userWeight.value < 0){
        textKg.innerHTML = "<span class='distinction'>Liczby ujemne są niedozwolone!</span>";
        return false;
    } else if(userWeight.value == 0){
        textKg.innerHTML = "<span class='distinction'>Taki człowiek nie istnieje :)</span>";
        return false;
    } else {
        textKg.innerText = "Prawidłowa wartość.";
        textKg.style.color = "lime";
        return true;
    }
};
userWeight.addEventListener("keyup", () => {
    if(userWeight.value !== "") {
        checkInputWeight();
    } else {
        textKg.innerText = "Wprowadź wartość.";
        textKg.style.color = "white";
    }
});

// CHECK INPUT HEIGHT
const checkInputHeight = () => {
    if(userHeight.value.match(letters)) {
        textCm.innerHTML = "<span class='distinction'>Litery są niedozwolone!</span>";
        return false;
    } else if(userHeight.value.match(special)) {
        textCm.innerHTML = "<span class='distinction'>Znaki specjalne są niedozwolone!</span>";
        return false;
    } else if(userHeight.value > 272){
        textCm.innerHTML = "<span class='distinction'>Człowiek o takim wzroście nie istnieje.</span>";
        return false;
    } else if(userHeight.value < 0){
        textCm.innerHTML = "<span class='distinction'>Liczby ujemne są niedozwolone!</span>";
        return false;
    } else if(userHeight.value == 0){
        textCm.innerHTML = "<span class='distinction'>Taki człowiek nie istnieje :)</span>";
        return false;
    } else {
        textCm.innerText = "Prawidłowa wartość.";
        textCm.style.color = "lime";
        return true;
    }
};
userHeight.addEventListener("keyup", () => {
    if(userHeight.value !== "") {
        checkInputHeight();
    } else {
        textCm.innerText = "Wprowadź wartość.";
        textCm.style.color = "white";
    }
});

// CHECK INPUT AGE
const checkInputAge = () => {
    if(userAge.value.match(letters)) {
        textAge.innerHTML = "<span class='distinction'>Litery są niedozwolone!</span>";
        return false;
    } else if(userAge.value.match(special)) {
        textAge.innerHTML = "<span class='distinction'>Znaki specjalne są niedozwolone!</span>";
        return false;
    } else if(userAge.value < 0){
        textAge.innerHTML = "<span class='distinction'>Liczby ujemne są niedozwolone!</span>";
    } else if(userAge.value == 0){
        textAge.innerHTML = "<span class='distinction'>Taki człowiek nie istnieje :)</span>";
        return false;
    } else if(userAge.value >= 123){
        textAge.innerHTML = "<span class='distinction'>Taki człowiek nie istnieje!</span>";
        return false;
    } else {
        textAge.innerText = "Prawidłowa wartość.";
        textAge.style.color = "lime";
        return true;
    }
};
userAge.addEventListener("keyup", () => {
    if(userAge.value !== "") {
        checkInputAge();
    } else {
        textAge.innerText = "Wprowadź wartość.";
        textAge.style.color = "white";
    }
});

// TABLE DATA INSERT
const tableOutput = () => {
    laying.innerHTML = (userWeight.value * 0.018).toFixed(1);
    sitting.innerHTML = (userWeight.value * 0.02).toFixed(1);
    standing.innerHTML = (userWeight.value * 0.022).toFixed(1);
    marchSlow.innerHTML = (userWeight.value * 0.05).toFixed(1);
    marchFast.innerHTML = (userWeight.value * 0.09).toFixed(1);
    running.innerHTML = (userWeight.value * 0.15).toFixed(1);
    climbing.innerHTML = (userWeight.value * 0.2).toFixed(1);
    chores.innerHTML = (userWeight.value * 0.06).toFixed(1);
    clearingSnow.innerHTML = (userWeight.value * 0.12).toFixed(1);
};

// BTN CLOSING POPUP
const closeOne = () => {
    popupFirst.style.display = "none";
};
const closeTwo = () => {
    popupTwo.style.display = "none";
};

// GENERAL FUNCTION
function btnCheck () {
    if(userWeight.value != "" && userHeight.value != "" && userAge.value != "") {
        if(checkInputWeight() == true && checkInputHeight() == true && checkInputAge() == true) {
            bmiCalculate();
            nutrientsShow();
            generateBmr();
            generateDailyDemand();
            tableOutput();
            blocked1.style.display = "none";
            blocked2.style.display = "none";
            blocked3.style.display = "none";
            bmiTitle.innerHTML = "Witaj! To twoje wyniki.";
        } else {
            popupFirst.style.display = "flex";
            blocked1.style.display = "flex";
            blocked2.style.display = "flex";
            blocked3.style.display = "flex";
            showBmi.innerHTML = "Brak danych";
            descriptionBmi.innerHTML = "Brak danych";
            recommendationsBmi.innerHTML = "Brak danych";
            bmiTitle.innerHTML = "Brak danych";
            img1.style.display = "none";
            img2.style.display = "none";
            img3.style.display = "none";
            nutrientsTitleFirst.innerHTML = "";
            nutrientsTextFirst.innerHTML = "Brak danych";
            nutrientsTitleSecond.innerHTML = "";
            nutrientsTextSecond.innerHTML = "Brak danych";
            nutrientsTitleThird.innerHTML = "";
            nutrientsTextThird.innerHTML = "Brak danych";
            laying.innerHTML = "Brak danych";
            sitting.innerHTML = "Brak danych";
            standing.innerHTML = "Brak danych";
            marchSlow.innerHTML = "Brak danych";
            marchFast.innerHTML = "Brak danych";
            running.innerHTML = "Brak danych";
            climbing.innerHTML = "Brak danych";
            chores.innerHTML = "Brak danych";
            clearingSnow.innerHTML = "Brak danych";
            bmrInfo1.innerHTML = "Brak danych";
            bmrInfo2.innerHTML = "Brak danych";
        }
    } else {
        popupTwo.style.display = "flex";
        blocked1.style.display = "flex";
        blocked2.style.display = "flex";
        blocked3.style.display = "flex";
        showBmi.innerHTML = "Brak danych";
        descriptionBmi.innerHTML = "Brak danych";
        recommendationsBmi.innerHTML = "Brak danych";
        bmiTitle.innerHTML = "Brak danych";
        img1.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        nutrientsTitleFirst.innerHTML = "";
        nutrientsTextFirst.innerHTML = "Brak danych";
        nutrientsTitleSecond.innerHTML = "";
        nutrientsTextSecond.innerHTML = "Brak danych";
        nutrientsTitleThird.innerHTML = "";
        nutrientsTextThird.innerHTML = "Brak danych";
        laying.innerHTML = "Brak danych";
        sitting.innerHTML = "Brak danych";
        standing.innerHTML = "Brak danych";
        marchSlow.innerHTML = "Brak danych";
        marchFast.innerHTML = "Brak danych";
        running.innerHTML = "Brak danych";
        climbing.innerHTML = "Brak danych";
        chores.innerHTML = "Brak danych";
        clearingSnow.innerHTML = "Brak danych";
        bmrInfo1.innerHTML = "Brak danych";
        bmrInfo2.innerHTML = "Brak danych";
    };
};