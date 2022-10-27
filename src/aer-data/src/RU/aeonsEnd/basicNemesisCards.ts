import { BasicNemesisCard } from '../../../../aer-types/types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'AgonyField-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Поле агонии',
    power: 2,
    effect: `
      <p>
        <b>ДЛЯ СБРОСА:</b> уничтожьте 1 карту из руки стоимостью 2 <span class="aether">&AElig;</span> или более.<br />
        <br />
        <b>СИЛА 2:</b> натиск. Любой игрок сбрасывает 3 карты из руки, а затем берёт 1 карту из своей колоды.
      </p>
    `,
  },
  {
    id: 'BaneSire-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Minion',
    name: 'Гибельный властитель',
    hp: 6,
    effect: `
      <p>
        <b>ПОСТОЯННО:</b> натиск.
      </p>
    `,
  },
  {
    id: 'BleedStatic-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Кровоточащая неподвижность',
    power: 3,
    effect: `
      <p>
        <b>СИЛА 3:</b> игрок с наибольшим числом подготовленных заклинаний
        получает по 2 урона за каждое из них.
      </p>
    `,
  },
  {
    id: 'EyeofNothing-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Око небытия',
    power: 2,
    effect: `
      <p>
        <b>ДЛЯ СБРОСА:</b> потратьте 6 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>СИЛА 2:</b> натиск 2 раза.
      </p>
    `,
  },
  {
    id: 'HazeSpewer-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Minion',
    name: 'Туманный изрыгатель',
    hp: 5,
    effect: `
      <p>
        <b>ПОСТОЯННО:</b>
        Грейвхолд получает столько урона, сколько жизней сейчас у этого
        приспешника. Затем этот приспешник получает 1 урон.
      </p>
    `,
  },
  {
    id: 'Skewer-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Attack',
    name: 'Резня',
    effect: `
      <p>
        Натиск. Любой игрок получает 3 урона и берёт 1 карту из своей колоды.
      </p>
    `,
  },
  {
    id: 'Slaughter-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Attack',
    name: 'Бойня',
    effect: `
      <p>
        Натиск. Грейвхолд получает 3 урона.
      </p>
    `,
  },
  {
    id: 'WovenSky-AE',
    expansion: 'AE',
    tier: 1,
    type: 'Power',
    name: 'Сотканное небо',
    power: 2,
    effect: `
      <p>
        <b>ДЛЯ СБРОСА:</b> сбросьте 3 карты с руки.<br />
        <br />
        <b>СИЛА 2:</b> натиск. Любой игрок получает 4 урона.
      </p>
    `,
  },
  {
    id: 'Awaken-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Пробуждение',
    effect: `
      <p>
        Натиск 2 раза, и Грейвхолд получает 3 урона. 
        <span class="or">или</span>
        Верните последнего сброшенного приспешника из стопки сброса исчадия
        обратно в игру.
      </p>
    `,
  },
  {
    id: 'Cauterizer-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Прижигатель',
    shields: 3,
    hp: 0,
    effect: `
      <p>
        Нанося урон этому приспешнику, уменьшайте этот урон до 1.<br />
        <br />
        <b>ПОСТОЯННО:</b> Любой игрок получает столько урона, сколько жизней
        сейчас у этого приспешника.
      </p>
    `,
  },
  {
    id: 'Dispel-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Рассеивание чар',
    effect: `
      <p>
        Натиск 2 раза. Игрок с наибольшим числом подготовленных заклинаний
        сбрасывает самое дорогое из них.
      </p>
    `,
  },
  {
    id: 'Needlemaw-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Иглозуб',
    hp: 11,
    effect: `
      <p>
        <b>ПОСТОЯННО:</b> Грейвхолд получает 2 урона.
      </p>
    `,
  },
  {
    id: 'LayWaste-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Attack',
    name: 'Опустошение',
    effect: `
      <p>
        Натиск 2 раза. Любой игрок получает 2 урона.
      </p>
    `,
  },
  {
    id: 'PulverizingRay-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Power',
    name: 'Распыляющий луч',
    power: 1,
    effect: `
      <p>
        <b>СИЛА 1:</b> Грейвхолд получает 3 урона.<br />
        <br />
        <span class="or">или</span><br />
        <br />
        Любой игрок сбрасывает самоцвет с руки.<br />
        <br />
        Разыграйте этот эффект ещё 5 раз.
      </p>
    `,
  },
  {
    id: 'Venomite-AE',
    expansion: 'AE',
    tier: 2,
    type: 'Minion',
    name: 'Отрава',
    hp: 9,
    effect: `
      <p>
        <b>ПОСТОЯННО:</b> игрок с наименьшим числом жизней получает 2 урона. 
        <span class="or">или</span>
        Любой игрок сбрасывает подготовленное заклинание стоимостью 3 <span class="aether">&AElig;</span> или более.
      </p>
    `,
  },
  {
    id: 'DoomAegis-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Power',
    name: 'Роковая эгида',
    power: 1,
    effect: `
      <p>
        <b>ДЛЯ СБРОСА:</b> потратьте 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>СИЛА 1:</b> игрок с наибольшим числом энергии получает 4 урона и
        теряет всю энергию.
      </p>
    `,
  },
  {
    id: 'GatherDarkness-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Скопление темноты',
    effect: `
      <p>
        Любой игрок кладёт свою стопку сброса на верх своей колоды, перемешивает
        её и уничтожает 4 верхние карты из своей колоды.<br />
        Натиск 2 раза.
      </p>
    `,
  },
  {
    id: 'JaggedOne-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Minion',
    name: 'Изломанный',
    hp: 14,
    effect: `
      <p>
        <b>ПОСТОЯННО:</b> натиск 2 раза.
      </p>
    `,
  },
  {
    id: 'Obliterate-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Уничтожение',
    effect: `
      <p>
        Натиск 2 раза. Игрок с наибольшим числом открытых разломов уничтожает
        4 карты из руки или получает 4 урона.
      </p>
    `,
  },
  {
    id: 'RealityRupture-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Power',
    name: 'Разрыв реальности',
    power: 1,
    effect: `
      <p>
        <b>ДЛЯ СБРОСА:</b> уничтожьте 2 подготовленных заклинания стоимостью 3 <span class="aether">&AElig;</span> или более каждое.<br />
        <br />
        <b>СИЛА 1:</b> натиск 3 раза.
      </p>
    `,
  },
  {
    id: 'Sunder-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Раскол',
    effect: `
      <p>
        Грейвхолд и игрок с наименьшим числом жизней получают по 4 урона.
        <span class="or">или</span>
        Замешайте все карты очерёдности хода "Исчадие" в колоду очерёдности хода.
      </p>
    `,
  },
  {
    id: 'Topple-AE',
    expansion: 'AE',
    tier: 3,
    type: 'Attack',
    name: 'Наскок',
    effect: `
      <p>
        Натиск 2 раза. Грейвхолд получает 4 урона.
      </p>
    `,
  },
]
