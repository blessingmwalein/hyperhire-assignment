export interface Competition {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    location: string;
}

//sample data
export const competitions: Competition[] = [
    {
        id: 1,
        name: '20th Asian Game - Achi Nagoya 2026 (Winter)',
        startDate: '2024-01-01',
        endDate: '2024-02-31',
        location: 'Pyeongchang, Gangwon-do, Korea'
    },
    {
        id: 2,
        name: '20th Asian Game - Achi Nagoya 2026 (Winter)',
        startDate: '2024-06-01',
        endDate: '2024-07-31',
        location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name'
    },
    {
        id: 3,
        name: '20th Asian Game - Achi Nagoya 2026 (Winter)',
        startDate: '2024-06-01',
        endDate: '2024-07-31',
        location: 'Pyeongchang, Gangwon-do, Korea'
    },
];