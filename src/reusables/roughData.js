import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { Download } from '@mui/icons-material';

export const initialData = [
    { name: 'Jan', uv: 20 },
    { name: 'Feb', uv: 50 },
    { name: 'Mar', uv: 30 },
    { name: 'Apr', uv: 70 },
    { name: 'May', uv: 40 },
    { name: 'June', uv: 90 },
    { name: 'July', uv: 10 },
    { name: 'Aug', uv: 80 },
    { name: 'Sep', uv: 60 },
    { name: 'Oct', uv: 30 },
    { name: 'Nov', uv: 70 },
    { name: 'Dec', uv: 40 },
];

export const chartComponentBtnData = [
    {
        componentType: 'normalBtn',
        btnText: 'Income',
        icon: <ExploreOutlinedIcon />,
        id: 232,
    },
    {
        componentType: 'normalBtn',
        btnText: 'Expense',
        icon: <ExploreOutlinedIcon />,
        id: 122,
    },
    {
        componentType: 'date',
        label: 'From Date',
        // icon:<ExploreOutlinedIcon/>,
        id: 242,
    },
    {
        componentType: 'date',
        label: 'To Date',
        // icon:<Download/>,
        id: 112,
    },
    {
        componentType: 'normalBtn',
        btnText: 'Download',
        icon: <Download />,
        id: 282,
    },
]