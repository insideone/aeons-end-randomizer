import { ICard } from '../../../../aer-types/types'

export const cards: ICard[] = [
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Скопление алмазов',
    id: 'DiamondCluster',
    cost: 4,
    effect: `
        <p>
          Получите 2 <span class="aether">&AElig;</span>.<br/>
          Если на этом ходу вы второй раз разыгрываете "Скопление алмазов",
          получите ещё 2 <span class="aether">&AElig;</span>.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Дуга хаоса',
    id: 'ChaosArc',
    cost: 6,
    effect: `
      <p>
        <b>Произнесение:</b> нанесите 3 урона.<br/>
        Нанесите ещё по 2 урона за каждое подготовленное заклинание в соседних разломах.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Воспламенение',
    id: 'Ignite',
    cost: 4,
    effect: `
        <p>
          <b>Произнесение:</b> нанесите 2 урона.<br/>
          Любой союзник получает 1 энергию.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Кража духа',
    id: 'EssenceTheft',
    cost: 5,
    effect: `
        <p>
          <b>Произнесение:</b> нанесите 3 урона.<br/>
          Можете сбросить 1 карту из руки. Если вы делаете это, любой игрок
          получает 1 жизнь.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Жгучий рубин',
    id: 'SearingRuby',
    cost: 4,
    effect: `
      <p>
        Получите 2 <span class="aether">&AElig;</span>.<br/>
        Получите ещё 1 <span class="aether">&AElig;</span>, который можно
        потратить только на получение заклинания.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Хищная молния',
    id: 'FeralLightning',
    cost: 5,
    effect: `
        <p>
          Это заклинание можно подготовить в закрытом разломе, не настраивая его.<br/>
          <b>Произнесение:</b> нанесите 3 урона.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Планарное озарение',
    id: 'PlanarInsight',
    cost: 6,
    effect: `
      <p>
        <b>Произнесение:</b> нанесите 2 урона.<br/>
        Нанесите ещё по 1 урону за каждый ваш открытый разлом.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Спектральное эхо',
    id: 'SpectralEcho',
    cost: 3,
    effect: `
        <p>
          <b>Произнесение:</b> нанесите 2 урона.<br/>
          Можете уничтожить 1 карту из руки.
        </p>
          `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Горящий опал',
    id: 'BurningOpal',
    cost: 5,
    effect: `
      <p>
        Получите 3 <span class="aether">&AElig;</span>.<br/>
        Можете сбросить 1 карту из руки. Если вы делаете это, любой союзник берёт
        1 карту из своей колоды.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Поглощающая пустота',
    id: 'ConsumingVoid',
    cost: 7,
    effect: `
      <p>
        <b>Произнесение:</b> уничтожьте до 2 карт из руки.<br/>
        Нанесите по 3 урона за каждую уничтоженную таким образом карту.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Нестабильная призма',
    id: 'UnstablePrism',
    cost: 3,
    effect: `
      <p>
        Разыграйте самоцвет из руки 2 раза и уничтожьте его.
        <span class="or">или</span>
        Получите 2 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Дымчатый сапфир',
    id: 'CloudedSapphire',
    cost: 6,
    effect: `
      <p>
        Получите 3 <span class="aether">&AElig;</span>.<br/>
        Если на этом ходу вы впервые разыгрываете "Дымчатый сапфир", любой союзник
        получает 1 энергию.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Талисман мага',
    id: 'MagesTalisman',
    cost: 5,
    effect: `
      <p>
        Получите 1 энергию.<br/>
        Любой союзник получает 1 энергию.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Изменчивый кинжал',
    id: 'FlexingDagger',
    cost: 2,
    effect: `
      <p>
        Следующая настройка или открытие разлома на этом ходу будет стоить вам
        на 3 <span class="aether">&AElig;</span> меньше.
        <span class="or">или</span>
        Уничтожьте эту карту. Нанесите 1 урон.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Лавовый узор',
    id: 'LavaTendril',
    cost: 4,
    effect: `
      <p>
        <b>Подготовка:</b> в конце вашей фазы заклинаний нанесите 1 урон.<br/>
        <b>Произнесение:</b> нанесите 3 урона.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Закупоренный вихрь',
    id: 'BottledVortex',
    cost: 3,
    effect: `
      <p>
        Уничтожьте эту карту.<br/>
        Уничтожьте до 2 карт из руки или стопки сброса.<br/>
        Возьмите 1 карту из вашей колоды.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Мистические узы',
    id: 'ArcaneNexus',
    cost: 7,
    effect: `
      <p>
        <b>Подготовка:</b> один раз в основной фазе вашего хода можете вернуть
        в руку самоцвет, разыгранный на этом ходу.<br/>
        <b>Произнесение:</b> нанесите 4 урона.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Тёмный огонь',
    id: 'DarkFire',
    cost: 5,
    effect: `
        <p>
          <b>Произнесение:</b> сбросьте до 2 карт из руки.<br/>
          Нанесите по 3 урона за каждую сброшенную таким образом карту.
        </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Пламя феникса',
    id: 'PhoenixFlame',
    cost: 3,
    effect: `
        <p>
          <b>Произнесение:</b> нанесите 2 урона.<br/>
          Можете потерять 1 энергию, чтобы нанести ещё 2 урона.
        </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Нефрит',
    id: 'Jade',
    cost: 2,
    effect: `
      <p>
        Получите 2 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Усиление видения',
    id: 'AmplifyVision',
    cost: 4,
    effect: `
      <p>
        <b>Произнесение:</b> настройте ваш закрытый разлом с наименьшей
        стоимостью настройки.<br/>
        Нанесите 2 урона. Если все ваши разломы открыты, нанесите ещё 1 урон.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Врисвудский янтарь',
    id: 'VriswoodAmber',
    cost: 3,
    effect: `
      <p>
        Получив эту карту, можете положить её на верх вашей колоды.<br/>
        Получите 2 <span class="aether">&AElig;</span>.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Взрывной посох',
    id: 'BlastingStaff',
    cost: 4,
    effect: `
      <p>
        Можете произнести заклинание, подготовленное на этом ходу.<br />
        Если вы делаете это, оно наносит на 2 урона больше.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Очищающая жемчужина',
    id: 'SiftersPearl',
    cost: 3,
    effect: `
      <p>
        Получите 2 <span class="aether">&AElig;</span>.<br/>
        Каждый игрок открывает верхнюю карту своей колоды и либо сбрасывает её,
        либо возвращает на верх своей колоды.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Огненный хлыст',
    id: 'WildfireWhip',
    cost: 6,
    effect: `
      <p>
        <b>Подготовка:</b> в основной фазе вашего хода можете потратить 2 <span class="aether">&AElig;</span>,
        чтобы произнести подготовленное заклинание любого игрока.<br/>
        <b>Произнесение:</b> нанесите 4 урона.
      </p>
      `,
    keywords: [],
  },
  {
    type: 'Relic',
    expansion: 'AE',
    name: 'Шар концентрации',
    id: 'FocusingOrb',
    cost: 4,
    effect: `
      <p>
        Настройте разлом любого игрока.
        <span class="or">или</span>
        Уничтожьте эту карту, при этом Грейвхолд получает 3 жизни.
      </p>
        `,
    keywords: [],
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Полёт забвения',
    id: 'OblivionSwell',
    cost: 5,
    effect: `
      <p>
        один раз в основной фазе вашего хода можете получить 1 <span class="aether">&AElig;</span>.<br/>
        <b>Произнесение:</b> нанесите 2 урона.<br/>
        Можете сбросить самоцвет из руки. Если вы делаете это, нанесите
        дополнительный урон, равный стоимости самоцвета.
      </p>
      `,
    keywords: [],
  },
]
