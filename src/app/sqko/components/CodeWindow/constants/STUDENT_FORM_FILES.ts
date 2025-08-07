import { FilesType } from '.'

export const STUDENT_FORM_FILES: FilesType = {
  'data.json': `{
  "id": "ac975586-775b-4436-83c2-f707df7cd6b3",
  "data": {
    "gender": "MALE",
    "university": {
      "id": "6167746f-8419-45ae-8412-bb696062fe57",
      "name": "Карагандинский университет Казпотребсоюза",
      "code": "KARUK",
      "__typename": "StudentDataUniversity"
    },
    "program": {
      "id": "f898f306-4d0d-4112-a81b-0efc260f4787",
      "name": "Докторантура",
      "degree": "DOCTORATE",
      "__typename": "StudentDataProgram"
    },
    "studyLanguage": "RU",
    "faculty": {
      "id": "d23ce32d-0d18-4c6f-8244-b433ce17f5a5",
      "name": "Факультет экономики, управления и предпринимательства",
      "shortName": "ФЭУП",
      "__typename": "StudentDataFaculty"
    },
    "speciality": {
      "id": "9d581e68-f227-40af-92ed-723f102e9357",
      "name": "Оценка",
      "__typename": "StudentDataSpeciality"
    },
    "groupName": "О-22",
    "courseYear": "2",
    "BACHELOR": null,
    "MASTER": null,
    "__typename": "StudentData"
  },
  "__typename": "Student",
  "university": {
    "id": "6167746f-8419-45ae-8412-bb696062fe57",
    "name": "Карагандинский университет Казпотребсоюза",
    "code": "KARUK",
    "studentInputs": [
      {
        "name": "gender",
        "label": "Пол",
        "type": "Radio",
        "position": 8,
        "params": {
          "defaultValue": "",
          "renderIf": null,
          "renderIfPresent": "university",
          "resetOnChange": null,
          "options": [
            {
              "value": "MALE",
              "label": "Мужской",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "FEMALE",
              "label": "Женский",
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
        "name": "program",
        "label": "Программа",
        "type": "Program",
        "position": 0,
        "params": {
          "defaultValue": null,
          "renderIf": [
            {
              "name": "university.code",
              "value": "KARUK",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": null,
          "resetOnChange": [
            {
              "name": "studyLanguage",
              "value": "",
              "__typename": "InputResetOnChange"
            },
            {
              "name": "courseYear",
              "value": "",
              "__typename": "InputResetOnChange"
            },
            {
              "name": "faculty",
              "value": null,
              "__typename": "InputResetOnChange"
            },
            {
              "name": "speciality",
              "value": null,
              "__typename": "InputResetOnChange"
            },
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            },
            {
              "name": "BACHELOR",
              "value": null,
              "__typename": "InputResetOnChange"
            },
            {
              "name": "MASTER",
              "value": null,
              "__typename": "InputResetOnChange"
            }
          ],
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
        "name": "studyLanguage",
        "label": "Язык обучения",
        "type": "Radio",
        "position": 5,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "BACHELOR",
              "__typename": "InputRenderIf"
            }
          ],
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
            },
            {
              "value": "EN",
              "label": "Английский",
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
        "name": "studyLanguage",
        "label": "Язык обучения",
        "type": "Radio",
        "position": 5,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "MASTER",
              "__typename": "InputRenderIf"
            }
          ],
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
        "name": "studyLanguage",
        "label": "Язык обучения",
        "type": "Radio",
        "position": 5,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "DOCTORATE",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": null,
          "resetOnChange": null,
          "options": [
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
        "name": "MASTER.specialityType",
        "label": "Направление",
        "type": "Radio",
        "position": 3,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "MASTER",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "studyLanguage",
          "resetOnChange": [
            {
              "name": "speciality",
              "value": null,
              "__typename": "InputResetOnChange"
            },
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "SCIENTIFIC",
              "label": "Научно-педагогическое",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "SPECIALIZED",
              "label": "Профильное",
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
        "name": "BACHELOR.studyForm",
        "label": "Форма обучения",
        "type": "Radio",
        "position": 3,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "BACHELOR",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "studyLanguage",
          "resetOnChange": [
            {
              "name": "BACHELOR.studyDuration",
              "value": "",
              "__typename": "InputResetOnChange"
            },
            {
              "name": "courseYear",
              "value": "",
              "__typename": "InputResetOnChange"
            },
            {
              "name": "faculty",
              "value": null,
              "__typename": "InputResetOnChange"
            },
            {
              "name": "speciality",
              "value": null,
              "__typename": "InputResetOnChange"
            },
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "FULL_TIME",
              "label": "Очная",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "FULL_TIME_DLT",
              "label": "Очная с приминением ДОТ",
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
        "name": "BACHELOR.studyDuration",
        "label": "Длительность обучения",
        "type": "Radio",
        "position": 4,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "BACHELOR",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyForm",
              "value": "FULL_TIME",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": null,
          "resetOnChange": [
            {
              "name": "courseYear",
              "value": "",
              "__typename": "InputResetOnChange"
            },
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "HIGH_SCHOOL",
              "label": "Полная",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "COLLEGE",
              "label": "Сокращенная",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "HIGHER_EDUCATION",
              "label": "На базе высшего образования",
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
        "name": "BACHELOR.studyDuration",
        "label": "Длительность обучения",
        "type": "Radio",
        "position": 4,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "BACHELOR",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyForm",
              "value": "FULL_TIME_DLT",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": null,
          "resetOnChange": [
            {
              "name": "courseYear",
              "value": "",
              "__typename": "InputResetOnChange"
            },
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "HIGHER_EDUCATION",
              "label": "На базе высшего образования",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "COLLEGE",
              "label": "Сокращенная",
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
        "name": "courseYear",
        "label": "Курс",
        "type": "Radio",
        "position": 6,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "BACHELOR",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyForm",
              "value": "FULL_TIME",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyDuration",
              "value": "HIGH_SCHOOL",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "studyLanguage",
          "resetOnChange": [
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "1",
              "label": "1",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "2",
              "label": "2",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "3",
              "label": "3",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "4",
              "label": "4",
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
        "name": "courseYear",
        "label": "Курс",
        "type": "Radio",
        "position": 6,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "BACHELOR",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyForm",
              "value": "FULL_TIME",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyDuration",
              "value": "COLLEGE",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "studyLanguage",
          "resetOnChange": [
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "1",
              "label": "1",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "2",
              "label": "2",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "3",
              "label": "3",
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
        "name": "courseYear",
        "label": "Курс",
        "type": "Radio",
        "position": 6,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "BACHELOR",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyForm",
              "value": "FULL_TIME",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyDuration",
              "value": "HIGHER_EDUCATION",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "studyLanguage",
          "resetOnChange": [
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "1",
              "label": "1",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "2",
              "label": "2",
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
        "name": "courseYear",
        "label": "Курс",
        "type": "Radio",
        "position": 6,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "BACHELOR",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyForm",
              "value": "FULL_TIME_DLT",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyDuration",
              "value": "HIGHER_EDUCATION",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "studyLanguage",
          "resetOnChange": [
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "1",
              "label": "1",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "2",
              "label": "2",
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
        "name": "courseYear",
        "label": "Курс",
        "type": "Radio",
        "position": 6,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "BACHELOR",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyForm",
              "value": "FULL_TIME_DLT",
              "__typename": "InputRenderIf"
            },
            {
              "name": "BACHELOR.studyDuration",
              "value": "COLLEGE",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "studyLanguage",
          "resetOnChange": [
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "1",
              "label": "1",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "2",
              "label": "2",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "3",
              "label": "3",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "4",
              "label": "4",
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
        "name": "courseYear",
        "label": "Курс",
        "type": "Radio",
        "position": 6,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "MASTER",
              "__typename": "InputRenderIf"
            },
            {
              "name": "MASTER.specialityType",
              "value": "SCIENTIFIC",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "studyLanguage",
          "resetOnChange": [
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "1",
              "label": "1",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "2",
              "label": "2",
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
        "name": "courseYear",
        "label": "Курс",
        "type": "Radio",
        "position": 6,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "MASTER",
              "__typename": "InputRenderIf"
            },
            {
              "name": "MASTER.specialityType",
              "value": "SPECIALIZED",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "studyLanguage",
          "resetOnChange": [
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "1",
              "label": "1",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "2",
              "label": "2",
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
        "name": "courseYear",
        "label": "Курс",
        "type": "Radio",
        "position": 6,
        "params": {
          "defaultValue": "",
          "renderIf": [
            {
              "name": "program.degree",
              "value": "DOCTORATE",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "studyLanguage",
          "resetOnChange": [
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
          "options": [
            {
              "value": "1",
              "label": "1",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "2",
              "label": "2",
              "disabled": null,
              "__typename": "InputOption"
            },
            {
              "value": "3",
              "label": "3",
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
        "name": "faculty",
        "label": "Факультет",
        "type": "Faculty",
        "position": 1,
        "params": {
          "defaultValue": null,
          "renderIf": [
            {
              "name": "program.degree",
              "value": "BACHELOR",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "BACHELOR.studyDuration",
          "resetOnChange": [
            {
              "name": "speciality",
              "value": null,
              "__typename": "InputResetOnChange"
            }
          ],
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
        "name": "faculty",
        "label": "Факультет",
        "type": "Faculty",
        "position": 1,
        "params": {
          "defaultValue": null,
          "renderIf": [
            {
              "name": "program.degree",
              "value": "MASTER",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "MASTER.specialityType",
          "resetOnChange": [
            {
              "name": "speciality",
              "value": null,
              "__typename": "InputResetOnChange"
            }
          ],
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
        "name": "faculty",
        "label": "Факультет",
        "type": "Faculty",
        "position": 1,
        "params": {
          "defaultValue": null,
          "renderIf": [
            {
              "name": "program.degree",
              "value": "DOCTORATE",
              "__typename": "InputRenderIf"
            }
          ],
          "renderIfPresent": "studyLanguage",
          "resetOnChange": [
            {
              "name": "speciality",
              "value": null,
              "__typename": "InputResetOnChange"
            }
          ],
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
        "name": "speciality",
        "label": "Специальность",
        "type": "Speciality",
        "position": 2,
        "params": {
          "defaultValue": null,
          "renderIf": null,
          "renderIfPresent": "faculty",
          "resetOnChange": [
            {
              "name": "groupName",
              "value": "",
              "__typename": "InputResetOnChange"
            }
          ],
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
        "name": "groupName",
        "label": "Группа",
        "type": "Text",
        "position": 7,
        "params": {
          "defaultValue": "",
          "renderIf": null,
          "renderIfPresent": "speciality",
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
          "required": {
            "message": "Обязательное поле",
            "value": true,
            "__typename": "InputRuleBoolean"
          },
          "__typename": "InputRules"
        },
        "__typename": "Input"
      }
    ],
    "__typename": "University"
  }
}`,
  'types.ts': `import {
  Degree,
  Faculty,
  Language,
  Program,
  Speciality,
  University,
} from '@prisma/client'

type StudentProfileType = {
  id: string
  data: StudentData
  university: UniversityData
}

type StudentData = {
  gender: Gender
  university: StudentDataUniversity
  studyLanguage: StudyLanguage
  program: StudentDataProgram
  faculty: StudentDataFaculty
  speciality: StudentDataSpeciality
  groupName: string
  courseYear: string
  [Degree.BACHELOR]?: {
    studyForm: StudyForm
    studyDuration: StudyDuration
  }
  [Degree.MASTER]?: {
    specialityType: MasterDegreeSpecialityType
  }
}

interface StudentDataUniversity
  extends Pick<University, 'id' | 'names' | 'code' | 'bin'> {}

interface StudentDataProgram extends Pick<Program, 'id' | 'names' | 'degree'> {}

interface StudentDataFaculty
  extends Pick<Faculty, 'id' | 'names' | 'shortNames' | 'data'> {}

interface StudentDataSpeciality
  extends Pick<Speciality, 'id' | 'names' | 'code' | 'data'> {}

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

enum StudyLanguage {
  RU = 'RU',
  KK = 'KK',
  EN = 'EN',
}

enum StudyForm {
  FULL_TIME = 'FULL_TIME',
  FULL_TIME_DLT = 'FULL_TIME_DLT',
}

enum StudyDuration {
  HIGH_SCHOOL = 'HIGH_SCHOOL',
  COLLEGE = 'COLLEGE',
  HIGHER_EDUCATION = 'HIGHER_EDUCATION',
}

enum MasterDegreeSpecialityType {
  SCIENTIFIC = 'SCIENTIFIC',
  SPECIALIZED = 'SPECIALIZED',
}

type UniversityData = {
  id: string
  names: Label[]
  code: string
  studentInputs: Input[]
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
}
`,
}
