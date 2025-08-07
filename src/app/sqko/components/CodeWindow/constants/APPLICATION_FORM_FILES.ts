import { FilesType } from '.'

export const APPLICATION_FORM_FILES: FilesType = {
  'data.json': `{
  "id": "c4374a12-156b-4d20-bd94-a22f821ed8e4",
  "name": "Справка с места учебы",
  "inputs": [
    {
      "name": "academicYear",
      "label": "Академический год",
      "type": "Select",
      "position": 0,
      "params": {
        "defaultValue": "2024-2025",
        "renderIf": null,
        "renderIfPresent": null,
        "resetOnChange": null,
        "options": [
          {
            "value": "2023-2024",
            "label": "2023-2024",
            "disabled": true,
            "__typename": "InputOption"
          },
          {
            "value": "2024-2025",
            "label": "2024-2025",
            "disabled": false,
            "__typename": "InputOption"
          }
        ],
        "minDate": null,
        "maxDate": null,
        "autoFocus": null,
        "helperText": null,
        "placeholder": null,
        "__typename": "InputParams"
      },
      "rules": {
        "max": null,
        "maxLength": null,
        "min": null,
        "minLength": null,
        "pattern": null,
        "required": {
          "message": "Обязательное поле",
          "value": true,
          "__typename": "InputRuleBoolean"
        },
        "__typename": "InputRules"
      },
      "__typename": "Input"
    },
    {
      "name": "applicationDocumentLanguage",
      "label": "Язык справки",
      "type": "Radio",
      "position": 1,
      "params": {
        "defaultValue": "",
        "renderIf": null,
        "renderIfPresent": null,
        "resetOnChange": null,
        "options": [
          {
            "value": "KK",
            "label": "Казахский",
            "disabled": null,
            "__typename": "InputOption"
          },
          {
            "value": "RU",
            "label": "Русский",
            "disabled": null,
            "__typename": "InputOption"
          }
        ],
        "minDate": null,
        "maxDate": null,
        "autoFocus": null,
        "helperText": null,
        "placeholder": null,
        "__typename": "InputParams"
      },
      "rules": {
        "max": null,
        "maxLength": null,
        "min": null,
        "minLength": null,
        "pattern": null,
        "required": {
          "message": "Обязательное поле",
          "value": true,
          "__typename": "InputRuleBoolean"
        },
        "__typename": "InputRules"
      },
      "__typename": "Input"
    },
    {
      "name": "includeAddressee",
      "label": "Указать место предоставления",
      "type": "Checkbox",
      "position": 2,
      "params": {
        "defaultValue": true,
        "renderIf": null,
        "renderIfPresent": "applicationDocumentLanguage",
        "resetOnChange": null,
        "options": null,
        "minDate": null,
        "maxDate": null,
        "autoFocus": null,
        "helperText": null,
        "placeholder": null,
        "__typename": "InputParams"
      },
      "rules": {
        "max": null,
        "maxLength": null,
        "min": null,
        "minLength": null,
        "pattern": null,
        "required": null,
        "__typename": "InputRules"
      },
      "__typename": "Input"
    },
    {
      "name": "addressee_KK",
      "label": "Место предоставления (KK)",
      "type": "Text",
      "position": 3,
      "params": {
        "defaultValue": "",
        "renderIf": [
          {
            "name": "includeAddressee",
            "value": true,
            "__typename": "InputRenderIf"
          },
          {
            "name": "applicationDocumentLanguage",
            "value": "KK",
            "__typename": "InputRenderIf"
          }
        ],
        "renderIfPresent": null,
        "resetOnChange": null,
        "options": null,
        "minDate": null,
        "maxDate": null,
        "autoFocus": true,
        "helperText": "Введите полное наименование организации на казахском языке",
        "placeholder": "Например: \"COMPANY\" ЖШС, \"Банк\" АҚ, \"№1 жалпы білім беретін мектебі\" КММ",
        "__typename": "InputParams"
      },
      "rules": {
        "max": null,
        "maxLength": null,
        "min": null,
        "minLength": null,
        "pattern": null,
        "required": {
          "message": "Обязательное поле",
          "value": true,
          "__typename": "InputRuleBoolean"
        },
        "__typename": "InputRules"
      },
      "__typename": "Input"
    },
    {
      "name": "addressee_RU",
      "label": "Место предоставления (RU)",
      "type": "Text",
      "position": 3,
      "params": {
        "defaultValue": "",
        "renderIf": [
          {
            "name": "includeAddressee",
            "value": true,
            "__typename": "InputRenderIf"
          },
          {
            "name": "applicationDocumentLanguage",
            "value": "RU",
            "__typename": "InputRenderIf"
          }
        ],
        "renderIfPresent": null,
        "resetOnChange": null,
        "options": null,
        "minDate": null,
        "maxDate": null,
        "autoFocus": true,
        "helperText": "Введите полное наименование организации на русском языке",
        "placeholder": "Например: ТОО \"COMPANY\", АО \"Банк\", КГУ \"Общеобразовательная школа №1\"",
        "__typename": "InputParams"
      },
      "rules": {
        "max": null,
        "maxLength": null,
        "min": null,
        "minLength": null,
        "pattern": null,
        "required": {
          "message": "Обязательное поле",
          "value": true,
          "__typename": "InputRuleBoolean"
        },
        "__typename": "InputRules"
      },
      "__typename": "Input"
    },
    {
      "name": "includeStudyPeriod",
      "label": "Указать длительность обучения",
      "type": "Checkbox",
      "position": 4,
      "params": {
        "defaultValue": false,
        "renderIf": null,
        "renderIfPresent": null,
        "resetOnChange": null,
        "options": null,
        "minDate": null,
        "maxDate": null,
        "autoFocus": null,
        "helperText": null,
        "placeholder": null,
        "__typename": "InputParams"
      },
      "rules": {
        "max": null,
        "maxLength": null,
        "min": null,
        "minLength": null,
        "pattern": null,
        "required": null,
        "__typename": "InputRules"
      },
      "__typename": "Input"
    },
    {
      "name": "tuitionCostMention",
      "label": "Указать стоимость обучения",
      "type": "Checkbox",
      "position": 5,
      "params": {
        "defaultValue": false,
        "renderIf": null,
        "renderIfPresent": null,
        "resetOnChange": null,
        "options": null,
        "minDate": null,
        "maxDate": null,
        "autoFocus": null,
        "helperText": null,
        "placeholder": null,
        "__typename": "InputParams"
      },
      "rules": {
        "max": null,
        "maxLength": null,
        "min": null,
        "minLength": null,
        "pattern": null,
        "required": null,
        "__typename": "InputRules"
      },
      "__typename": "Input"
    },
    {
      "name": "paidByLegalEntity",
      "label": "Обучение оплачивается юридическим лицом, указанном в поле \"Место предоставления (KK/RU)\"",
      "type": "Checkbox",
      "position": 6,
      "params": {
        "defaultValue": false,
        "renderIf": [
          {
            "name": "academicYear",
            "value": "2024-2025",
            "__typename": "InputRenderIf"
          },
          {
            "name": "includeAddressee",
            "value": true,
            "__typename": "InputRenderIf"
          },
          {
            "name": "tuitionCostMention",
            "value": true,
            "__typename": "InputRenderIf"
          }
        ],
        "renderIfPresent": null,
        "resetOnChange": null,
        "options": null,
        "minDate": null,
        "maxDate": null,
        "autoFocus": null,
        "helperText": null,
        "placeholder": null,
        "__typename": "InputParams"
      },
      "rules": {
        "max": null,
        "maxLength": null,
        "min": null,
        "minLength": null,
        "pattern": null,
        "required": null,
        "__typename": "InputRules"
      },
      "__typename": "Input"
    },
    {
      "name": "scholarshipHolderMention",
      "label": "Указать информацию о наличии/отсутствии стипендии",
      "type": "Checkbox",
      "position": 7,
      "params": {
        "defaultValue": false,
        "renderIf": [
          {
            "name": "tuitionCostMention",
            "value": true,
            "__typename": "InputRenderIf"
          }
        ],
        "renderIfPresent": null,
        "resetOnChange": null,
        "options": null,
        "minDate": null,
        "maxDate": null,
        "autoFocus": null,
        "helperText": null,
        "placeholder": null,
        "__typename": "InputParams"
      },
      "rules": {
        "max": null,
        "maxLength": null,
        "min": null,
        "minLength": null,
        "pattern": null,
        "required": null,
        "__typename": "InputRules"
      },
      "__typename": "Input"
    },
    {
      "name": "scholarshipHolder",
      "label": "Стипендиат",
      "type": "Radio",
      "position": 8,
      "params": {
        "defaultValue": "",
        "renderIf": [
          {
            "name": "scholarshipHolderMention",
            "value": true,
            "__typename": "InputRenderIf"
          }
        ],
        "renderIfPresent": null,
        "resetOnChange": null,
        "options": [
          {
            "value": "true",
            "label": "Да",
            "disabled": null,
            "__typename": "InputOption"
          },
          {
            "value": "false",
            "label": "Нет",
            "disabled": null,
            "__typename": "InputOption"
          }
        ],
        "minDate": null,
        "maxDate": null,
        "autoFocus": null,
        "helperText": null,
        "placeholder": null,
        "__typename": "InputParams"
      },
      "rules": {
        "max": null,
        "maxLength": null,
        "min": null,
        "minLength": null,
        "pattern": null,
        "required": {
          "message": "Обязательное поле",
          "value": true,
          "__typename": "InputRuleBoolean"
        },
        "__typename": "InputRules"
      },
      "__typename": "Input"
    },
    "isActive": true,
    "__typename": "Service"
  ]
}`,
  'types.ts': `import { Language } from '@prisma/client'

type ServiceDataType = {
  code: string
  names: Label[]
  studentInputs: Input[]
  officerInputs: Input[]
  document: {
    id: string
    code: string
    referenceNumber?: string
    names: Label[]
  }
  isActive: boolean
}

type Label = {
  language: Language
  value: string
}

type Input = {
  name: string
  type: InputType
  labels: Label[]
  rules: InputRules
  params: InputParams
  position: number
}

enum InputType {
  Checkbox = 'CHECKBOX',
  Date = 'DATE',
  Document = 'DOCUMENT',
  Faculty = 'FACULTY',
  File = 'FILE',
  Number = 'NUMBER',
  PhoneNumber = 'PHONE_NUMBER',
  Program = 'PROGRAM',
  Radio = 'RADIO',
  Region = 'REGION',
  Select = 'SELECT',
  Speciality = 'SPECIALITY',
  Text = 'TEXT',
  Textarea = 'TEXTAREA',
  University = 'UNIVERSITY',
}

type InputParams = {
  defaultValue: any
  renderIf?: InputRenderIf[]
  renderIfPresent?: string
  resetOnChange?: InputResetOnChange[]
  options?: InputOption[]
  minDate?: string
  maxDate?: string
  autoFocus?: boolean
  helperTexts?: Label[]
  placeholders?: Label[]
}

type InputOption = {
  value: string
  labels: Label[]
  disabled?: boolean
}

type InputRenderIf = {
  name: string
  value: any
}

type InputResetOnChange = {
  name: string
  value: any
}

type InputRules = {
  pattern?: InputRuleRegExp
  required?: InputRuleBoolean
  min?: InputRuleNumber
  max?: InputRuleNumber
  maxLength?: InputRuleNumber
  minLength?: InputRuleNumber
}

type InputRuleBoolean = {
  value: boolean
  messages: Label[]
}

type InputRuleNumber = {
  value: number
  messages: Label[]
}

type InputRuleRegExp = {
  value: string
  messages: Label[]
}`,
  'seed.ts': `import {
  InputType,
  Language
  ServiceDataType,
} from 'types.ts'

const DOCUMENT_ID = 'UUID'

export const data: ServiceDataType = {
  code: 'ENROLLMENT',
  names: [
    {
      language: 'KK',
      value: 'Оқу орнынан анықтама',
    },
    {
      language: 'RU',
      value: 'Справка с места учебы',
    },
  ],
  studentInputs: [
    {
      name: 'academicYear',
      type: InputType.Select,
      position: 0,
      labels: [
        {
          language: 'KK',
          value: 'Оқу жылы',
        },
        {
          language: 'RU',
          value: 'Академический год',
        },
      ],
      params: {
        defaultValue: '2024-2025',
        options: ['2023-2024', '2024-2025'].map((academicYear) => ({
          value: academicYear,
          labels: [
            {
              language: Language.RU,
              value: academicYear,
            },
            {
              language: Language.KK,
              value: academicYear,
            },
          ],
          disabled: academicYear === '2023-2024',
        })),
      },
      rules: {
        required: {
          value: true,
          messages: [
            {
              language: 'KK',
              value: 'Міндетті өріс',
            },
            {
              language: 'RU',
              value: 'Обязательное поле',
            },
          ],
        },
      },
    },
    {
      name: 'applicationDocumentLanguage',
      type: InputType.Radio,
      position: 1,
      labels: [
        {
          language: 'KK',
          value: 'Анықтама тілі',
        },
        {
          language: 'RU',
          value: 'Язык справки',
        },
      ],
      params: {
        defaultValue: '',
        options: [
          {
            value: 'KK',
            labels: [
              {
                language: 'KK',
                value: 'Қазақ',
              },
              {
                language: 'RU',
                value: 'Казахский',
              },
            ],
          },
          {
            value: 'RU',
            labels: [
              {
                language: 'KK',
                value: 'Орыс',
              },
              {
                language: 'RU',
                value: 'Русский',
              },
            ],
          },
        ],
      },
      rules: {
        required: {
          value: true,
          messages: [
            {
              language: Language.KK,
              value: 'Міндетті өріс',
            },
            {
              language: Language.RU,
              value: 'Обязательное поле',
            },
          ],
        },
      },
    },
    {
      name: 'includeAddressee',
      type: InputType.Checkbox,
      position: 2,
      labels: [
        {
          language: 'KK',
          value: 'Ұсыну орнын көрсету',
        },
        {
          language: 'RU',
          value: 'Указать место предоставления',
        },
      ],
      params: {
        defaultValue: true,
        renderIfPresent: 'applicationDocumentLanguage',
      },
      rules: {},
    },
    {
      name: 'addressee_KK',
      type: InputType.Text,
      position: 3,
      labels: [
        {
          language: 'KK',
          value: 'Ұсыну орны (KK)',
        },
        {
          language: 'RU',
          value: 'Место предоставления (KK)',
        },
      ],
      params: {
        defaultValue: '',
        autoFocus: true,
        renderIf: [
          {
            name: 'includeAddressee',
            value: true,
          },
          {
            name: 'applicationDocumentLanguage',
            value: 'KK',
          },
        ],
        helperTexts: [
          {
            language: 'KK',
            value: 'Ұйымның толық атауын қазақ тілінде енгізіңіз',
          },
          {
            language: 'RU',
            value: 'Введите полное наименование организации на казахском языке',
          },
        ],
        placeholders: [
          {
            language: 'KK',
            value:
              'Мысалы: "COMPANY" ЖШС, "Банк" АҚ, "№1 жалпы білім беретін мектебі" КММ',
          },
          {
            language: 'RU',
            value:
              'Например: "COMPANY" ЖШС, "Банк" АҚ, "№1 жалпы білім беретін мектебі" КММ',
          },
        ],
      },
      rules: {
        required: {
          value: true,
          messages: [
            {
              language: 'KK',
              value: 'Міндетті өріс',
            },
            {
              language: 'RU',
              value: 'Обязательное поле',
            },
          ],
        },
      },
    },
    {
      name: 'addressee_RU',
      type: InputType.Text,
      position: 3,
      labels: [
        {
          language: 'KK',
          value: 'Ұсыну орны (RU)',
        },
        {
          language: 'RU',
          value: 'Место предоставления (RU)',
        },
      ],
      params: {
        defaultValue: '',
        autoFocus: true,
        renderIf: [
          {
            name: 'includeAddressee',
            value: true,
          },
          {
            name: 'applicationDocumentLanguage',
            value: 'RU',
          },
        ],
        helperTexts: [
          {
            language: 'KK',
            value: 'Ұйымның толық атауын орыс тілінде енгізіңіз',
          },
          {
            language: 'RU',
            value: 'Введите полное наименование организации на русском языке',
          },
        ],
        placeholders: [
          {
            language: 'KK',
            value:
              'Мысалы: ТОО "COMPANY", АО "Банк", КГУ "Общеобразовательная школа №1"',
          },
          {
            language: 'RU',
            value:
              'Например: ТОО "COMPANY", АО "Банк", КГУ "Общеобразовательная школа №1"',
          },
        ],
      },
      rules: {
        required: {
          value: true,
          messages: [
            {
              language: 'KK',
              value: 'Міндетті өріс',
            },
            {
              language: 'RU',
              value: 'Обязательное поле',
            },
          ],
        },
      },
    },
    {
      name: 'includeStudyPeriod',
      type: InputType.Checkbox,
      position: 4,
      labels: [
        {
          language: 'KK',
          value: 'Оқу мерзімін көрсету',
        },
        {
          language: 'RU',
          value: 'Указать длительность обучения',
        },
      ],
      params: {
        defaultValue: false,
      },
      rules: {},
    },
    {
      name: 'tuitionCostMention',
      type: InputType.Checkbox,
      position: 5,
      labels: [
        {
          language: 'KK',
          value: 'Анықтамада оқу құнын көрсету',
        },
        {
          language: 'RU',
          value: 'Указать стоимость обучения',
        },
      ],
      params: {
        defaultValue: false,
      },
      rules: {},
    },
    {
      name: 'paidByLegalEntity',
      type: InputType.Checkbox,
      position: 6,
      labels: [
        {
          language: 'KK',
          value:
            'Оқу "Ұсыну орны (KK/RU)" өрісінде енгізілген заңды тұлға есебінен қаржыландырылады',
        },
        {
          language: 'RU',
          value:
            'Обучение оплачивается юридическим лицом, указанном в поле "Место предоставления (KK/RU)"',
        },
      ],
      params: {
        defaultValue: false,
        renderIf: [
          {
            name: 'academicYear',
            value: '2024-2025',
          },
          {
            name: 'includeAddressee',
            value: true,
          },
          {
            name: 'tuitionCostMention',
            value: true,
          },
        ],
      },
      rules: {},
    },
    {
      name: 'scholarshipHolderMention',
      type: InputType.Checkbox,
      position: 7,
      labels: [
        {
          language: 'KK',
          value: 'Шәкіртақыны алу/алмау туралы ақпаратты қосу',
        },
        {
          language: 'RU',
          value: 'Указать информацию о наличии/отсутствии стипендии',
        },
      ],
      params: {
        defaultValue: false,
        renderIf: [
          {
            name: 'tuitionCostMention',
            value: true,
          },
        ],
      },
      rules: {},
    },
    {
      name: 'scholarshipHolder',
      type: InputType.Radio,
      position: 8,
      labels: [
        {
          language: 'KK',
          value: 'Шәкіртақы иегері',
        },
        {
          language: 'RU',
          value: 'Стипендиат',
        },
      ],
      params: {
        defaultValue: '',
        renderIf: [
          {
            name: 'scholarshipHolderMention',
            value: true,
          },
        ],
        options: [
          {
            value: 'true',
            labels: [
              {
                language: 'KK',
                value: 'Иә',
              },
              {
                language: 'RU',
                value: 'Да',
              },
            ],
          },
          {
            value: 'false',
            labels: [
              {
                language: 'KK',
                value: 'Жоқ',
              },
              {
                language: 'RU',
                value: 'Нет',
              },
            ],
          },
        ],
      },
      rules: {
        required: {
          value: true,
          messages: [
            {
              language: 'KK',
              value: 'Міндетті өріс',
            },
            {
              language: 'RU',
              value: 'Обязательное поле',
            },
          ],
        },
      },
    },
  ],
  officerInputs: [
    {
      name: 'studyStartDate',
      type: InputType.Date,
      position: 0,
      labels: [
        {
          language: 'KK',
          value: 'Оқуды бастау күні',
        },
        {
          language: 'RU',
          value: 'Дата начала обучения',
        },
      ],
      params: {
        defaultValue: null,
        renderIf: [
          {
            name: 'form.includeStudyPeriod',
            value: true,
          },
        ],
      },
      rules: {
        required: {
          value: true,
          messages: [
            {
              language: 'KK',
              value: 'Міндетті өріс',
            },
            {
              language: 'RU',
              value: 'Обязательное поле',
            },
          ],
        },
      },
    },
    {
      name: 'studyEndDate',
      type: InputType.Date,
      position: 1,
      labels: [
        {
          language: 'KK',
          value: 'Оқуды аяқтау күні',
        },
        {
          language: 'RU',
          value: 'Дата окончания обучения',
        },
      ],
      params: {
        defaultValue: null,
        renderIf: [
          {
            name: 'form.includeStudyPeriod',
            value: true,
          },
        ],
      },
      rules: {
        required: {
          value: true,
          messages: [
            {
              language: 'KK',
              value: 'Міндетті өріс',
            },
            {
              language: 'RU',
              value: 'Обязательное поле',
            },
          ],
        },
      },
    },
  ],
  document: {
    id: DOCUMENT_ID,
    code: 'CERTIFICATE',
    referenceNumber: '1-1',
    names: [
      {
        value: 'Оқу орнынан анықтама',
        language: 'KK',
      },
      {
        value: 'Справка с места учебы',
        language: 'RU',
      },
    ],
  },
  isActive: true,
}`,
}
