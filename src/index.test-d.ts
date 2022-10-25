import { expectType, expectError } from 'tsd';
import { getPersons, personToString } from './index';

expectType<string>(getPersons()[0].name);
expectType<number>(getPersons()[0].age);
expectType<'male' | 'female'>(getPersons()[0].gender);

expectType<string>(
    personToString({
        age: 18,
        gender: 'male',
        name: 'Иванов И.И.',
    }),
);
expectType<string>(
    personToString({
        age: 18,
        gender: 'female',
        name: 'Иванов И.И.',
    }),
);
expectType<string>(
    personToString({
        age: 18,
        gender: 'male',
        name: 'Иванов И.И.',
        company: 'Тензор',
    }),
);
expectType<string>(
    personToString({
        age: 18,
        gender: 'female',
        name: 'Иванов И.И.',
        company: 'Тензор',
    }),
);
expectError(
    personToString({
        age: 18,
        gender: 'male',
        name: 'Иванов И.И.',
        company: 'Тензор',
        extraField: '1',
    }),
);
expectError(
    personToString({
        age: 18,
        gender: 'female',
        name: 'Иванов И.И.',
        company: 'Тензор',
        extraField: '1',
    }),
);
