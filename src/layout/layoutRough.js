import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const topLinksData = [
    {
        text:'Dashboards',
        leftIcon:<HomeOutlinedIcon/>,
        rightIcon:<ChevronRightOutlinedIcon/>,
        to:'/'
    },
    {
        text:'Transaction',
        leftIcon:<AssignmentOutlinedIcon/>,
        rightIcon:'',
        to:'/t'
    },
    {
        text:'My Wallet',
        leftIcon:<AccountBalanceWalletOutlinedIcon/>,
        rightIcon:'',
        to:'/w'
    },
    {
        text:'Analytics',
        leftIcon:<AssessmentOutlinedIcon/>,
        rightIcon:'',
        to:'/a'
    },
    {
        text:'Statistics',
        leftIcon:<TrendingUpOutlinedIcon/>,
        rightIcon:<ChevronRightOutlinedIcon/>,
        to:'/s'
    },
    {
        text:'Inbox',
        leftIcon:<MarkUnreadChatAltOutlinedIcon/>,
        rightIcon:'',
        to:'/i'
    },
    {
        text:'External',
        leftIcon:<LockOutlinedIcon/>,
        rightIcon:<ChevronRightOutlinedIcon/>,
        to:'/e'
    },
    {
        text:'Project',
        leftIcon:<OutboxOutlinedIcon/>,
        rightIcon:'',
        to:'/p'
    },
    {
        text:'Integrations',
        leftIcon:<InterestsOutlinedIcon/>,
        rightIcon:'',
        to:'/int'
    },
    {
        text:'Notifications',
        leftIcon:<NotificationsOutlinedIcon/>,
        rightIcon:<ChevronRightOutlinedIcon/>,
        to:'/n'
    },
    {
        text:'User',
        leftIcon:<PermIdentityOutlinedIcon/>,
        rightIcon:'',
        to:'/u'
    },
    {
        text:'History',
        leftIcon:<HistoryOutlinedIcon/>,
        rightIcon:'',
        to:'/h'
    },
  ];
export const bottomLinksData = [
    {
        text:'Support',
        leftIcon:<RecommendOutlinedIcon/>,
        rightIcon:'',
        to:'/su'
    },
    {
        text:'Setting',
        leftIcon:<SettingsOutlinedIcon/>,
        rightIcon:'',
        to:'/se'
    },
    {
        text:'Logout',
        leftIcon:<LogoutOutlinedIcon/>,
        rightIcon:'',
        to:'/lo'
    },
  ];