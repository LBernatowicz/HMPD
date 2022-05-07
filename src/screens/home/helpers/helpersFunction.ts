import GLOBAL_COLORS from '../../../ui/colors/colors';

export const handlePokemonIndex = (idx: number) => {
    if (idx < 10) {return `#00${idx.toString()}`}
    else if ((idx > 9 && idx < 100)) { return `#0${idx.toString()}`}
    else if (idx > 99) {return `#${idx.toString()}`}
    else {return ''}
}

export const handlePokemonTypeColor = (type: string) => {
    switch (type) {
        case 'grass':
            return [GLOBAL_COLORS.leafFirst, GLOBAL_COLORS.leafSecond]
        case 'fire':
            return [GLOBAL_COLORS.fireFirst, GLOBAL_COLORS.fireSecond]
        case 'water':
            return [GLOBAL_COLORS.waterFirst, GLOBAL_COLORS.waterSecond]
        case 'bug':
            return [GLOBAL_COLORS.bugFirst, GLOBAL_COLORS.bugSecond]
        case 'normal':
            return [GLOBAL_COLORS.normalFirst, GLOBAL_COLORS.normalSecond]
        default:
            return [GLOBAL_COLORS.leafFirst, GLOBAL_COLORS.leafSecond]
    }
}

export const handlePokemonSecondColor = (type: string) => {
    switch (type) {
        case 'grass':
            return GLOBAL_COLORS.leafSecond
        case 'fire':
            return GLOBAL_COLORS.fireSecond
        case 'water':
            return GLOBAL_COLORS.waterSecond
        case 'bug':
            return GLOBAL_COLORS.bugSecond
        case 'normal':
            return GLOBAL_COLORS.normalSecond
        default:
            return GLOBAL_COLORS.leafSecond
    }
}

export const handlePokemonFirstColor = (type: string) => {
    switch (type) {
        case 'grass':
            return GLOBAL_COLORS.leafFirst
        case 'fire':
            return GLOBAL_COLORS.fireFirst
        case 'water':
            return GLOBAL_COLORS.waterFirst
        case 'bug':
            return GLOBAL_COLORS.bugFirst
        case 'normal':
            return GLOBAL_COLORS.normalFirst
        default:
            return GLOBAL_COLORS.leafFirst
    }
}

export const handlePokemonTypeElemental = (type: string) => {
    switch (type) {
        case 'grass':
            return require('../../../assets/pictures/leafType.png')
        case 'fire':
            return require('../../../assets/pictures/fireType.png')
        case 'water':
            return require('../../../assets/pictures/waterType.png')
        case 'bug':
            return require('../../../assets/pictures/posionType.png')
        case 'normal':
            return require('../../../assets/pictures/rockType.png')
        default:
            return require('../../../assets/pictures/leafType.png')
    }
}


