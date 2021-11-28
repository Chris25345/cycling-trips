// Страница всех маршрутов
const mapDivs = document.querySelectorAll('.js-map-preview');
mapDivs.forEach((mapDiv) => {
  const id = (mapDiv.id).slice(12);
  // input#map_preview_points_{{id}}
  ymaps.ready(() => {
    const routePointsInput = document.querySelector(`#map_preview_points_${id}`);
    const { startPoint, finishPoint } = routePointsInput.dataset;

    const myMap = new ymaps.Map(`map_preview_${id}`, {
      center: [59.94, 30.36], // Чернышевская
      zoom: 10,
      controls: [],
    });

    // Создание экземпляра маршрута.

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        // Точки маршрута. Обязательное поле.
        referencePoints: [startPoint.split(', '), finishPoint.split(', ')],
        params: {
          routingMode: 'bicycle', // Тип маршрута: на велосипеде.
        },
      },
      {
        // Задаем собственную картинку Эльбрус для конечной точки.
        wayPointFinishIconLayout: 'default#image',
        wayPointFinishIconImageHref: 'https://elbrus-scheduler.herokuapp.com/static/media/elb-logo.1cbfd1d7.svg',
        wayPointFinishIconImageSize: [33, 33],
        wayPointFinishIconImageOffset: [-10, -10],
      },
      {
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        boundsAutoApply: true,
      },
    );

    myMap.geoObjects.add(multiRoute);// Добавление маршрута на карту.
  });
});

// Страница маршрута
ymaps.ready(() => {
  const routePointsInput = document.querySelector('.js-route-points');
  const { startPoint, finishPoint } = routePointsInput.dataset;

  const myMap = new ymaps.Map('map_2', {
    center: [59.94, 30.36], // Чернышевская
    zoom: 11,
    controls: [],
  });

  // Создание экземпляра маршрута.

  const multiRoute = new ymaps.multiRouter.MultiRoute(
    {
      // Точки маршрута. Обязательное поле.
      referencePoints: [startPoint.split(', '), finishPoint.split(', ')],
      params: {
        routingMode: 'bicycle', // Тип маршрута: на велосипеде.
      },
    },
    {
      // Задаем собственную картинку Эльбрус для конечной точки.
      wayPointFinishIconLayout: 'default#image',
      wayPointFinishIconImageHref: 'https://elbrus-scheduler.herokuapp.com/static/media/elb-logo.1cbfd1d7.svg',
      wayPointFinishIconImageSize: [33, 33],
      wayPointFinishIconImageOffset: [-10, -10],
    },
    {
      // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
      boundsAutoApply: true,
    },
  );

  myMap.geoObjects.add(multiRoute);// Добавление маршрута на карту.
});

// Создание маршрута на карте
ymaps.ready(() => {
  const myMap = new ymaps.Map('map', {
    center: [59.94, 30.36], // Чернышевская
    zoom: 11,
    controls: [],
  });

  // Создание экземпляра маршрута.
  const route = [];
  myMap.events.add('click', async (event) => {
    const position = await event.get('coords'); // получаем координаты

    if (route.length < 2) {
      route.push(position);
    } else if (route.length === 2) {
      stopPropagation();
    }
    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        // Точки маршрута. Обязательное поле.
        referencePoints: route,
        params: {
          routingMode: 'bicycle', // Тип маршрута: на велосипеде.
        },
      },
      {
        // Задаем собственную картинку Эльбрус для конечной точки.
        wayPointFinishIconLayout: 'default#image',
        wayPointFinishIconImageHref: 'https://elbrus-scheduler.herokuapp.com/static/media/elb-logo.1cbfd1d7.svg',
        wayPointFinishIconImageSize: [33, 33],
        wayPointFinishIconImageOffset: [-10, -10],
      },
      {
        // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
        // boundsAutoApply: true
      },
    );

    if (route.length === 2) {
      myMap.geoObjects.add(multiRoute);// Добавление маршрута на карту.
      // Передаём координаты в форму
      const routePointsInput = document.querySelector('.js-route-points');
      // TODO: Проверить порядок координат
      /* eslint-disable prefer-destructuring */
      routePointsInput.dataset.startX = route[0][0];
      routePointsInput.dataset.startY = route[0][1];
      routePointsInput.dataset.finishX = route[1][0];
      routePointsInput.dataset.finishY = route[1][1];
      /* eslint-enable prefer-destructuring */
      console.log(routePointsInput.dataset.startX, routePointsInput.dataset.finishY);
    }
  });
});

// Создание маршрута
const createMap = document.getElementById('createMap');
if (createMap) {
  createMap.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      method,
      action,
      nameRoute: { value: nameRoute },
      lengthRoute: { value: lengthRoute },
      crowdedPoint: { value: crowdedPoint },
      routePoints: { dataset: { startX } },
      routePoints: { dataset: { startY } },
      routePoints: { dataset: { finishX } },
      routePoints: { dataset: { finishY } },
    } = event.target;

    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nameRoute,
        lengthRoute,
        crowdedPoint,
        startX,
        startY,
        finishX,
        finishY,
      }),
    });
    const jsonResponse = await response.json();
    if (jsonResponse.created) {
      window.location.href = '/personal/create';
    } else {
      alert('Route was not created');
    }
  });
}

// Регистрация
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {
      action, method, username, email, password, confirmPassword,
    } = event.target;

    if (username.value == null || username.value == undefined || username.value == '') {
      alert('Username must not be empty');
      window.location.href = action;
      return;
    }

    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match!');
      window.location.href = action;
      return;
    }

    if (password.value.length < 5) {
      alert('Password must be at least 5 characters');
      window.location.href = action;
      return;
    }
    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });
    const responseJson = await response.json();
    if (responseJson.registrated) {
      window.location.href = '/';
    } else {
      alert('Пользователь уже существует');
      window.location.href = action;
    }
  });
}

// Логин
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {
      action, method, email, password, username,
    } = event.target;
    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        username: username.value,
        password: password.value,
      }),
    });
    const jsonResponse = await response.json();
    if (jsonResponse.passwordNotMatch) {
      alert('Password do not match');
      window.location.href = action;
    } else if (jsonResponse.loggedIn) {
      window.location.href = '/';
    } else if (!jsonResponse.exsists) {
      alert('User dosen`t exist');
      window.location.href = '/register';
    } else {
      alert('Failed to login');
      window.location.href = action;
    }
  });
}
