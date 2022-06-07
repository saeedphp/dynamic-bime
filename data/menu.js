const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'درباره آرمان',
        link: '',
        children: [
            {
                id: 'm1-1',
                link: 'about/vision',
                title: 'چشم انداز های بیمه آرمان',
            },
            {
                id: 'm1-2',
                link: 'about/personel',
                title: 'پرسنل و اعضای بیمه آرمان',
            },
            {
                id: 'm1-3',
                link: 'about/intro',
                title: 'بیمه آرمان در یک نگاه',
            },
        ]
    },
    {
        id: 'm2',
        title: 'محصولات',
        link: '',
        children: [
            {
                id: 'm2-1',
                link: 'product/8',
                title: 'بیمه آتش سوزی',
            },
            {
                id: 'm2-2',
                link: 'product/9',
                title: 'بیمه مسئولیت',
            },
            {
                id: 'm2-3',
                link: 'product/10',
                title: 'بیمه عمر سرمایه گذاری',
            },
            {
                id: 'm2-4',
                link: 'product/11',
                title: 'بیمه مهندسی',
            },
            {
                id: 'm2-5',
                link: 'product/12',
                title: 'بیمه خودرو',
            },
            {
                id: 'm2-6',
                link: 'product/13',
                title: 'بیمه های خاص',
            },
            {
                id: 'm2-7',
                link: 'product/14',
                title: 'بیمه انرژی',
            },
            {
                id: 'm2-8',
                link: 'product/15',
                title: 'بیمه کشتی و هواپیما',
            },
            {
                id: 'm2-9',
                link: 'product/16',
                title: 'بیمه اشخاص',
            },
        ]
    },
    {
        id: 'm3',
        title: 'شبکه فروش',
        link: '',
        children: [
            {
                id: 'm3-1',
                link: 'salesnetwork/rules',
                title: 'قوانین و مقررات',
            },
            {
                id: 'm3-2',
                link: 'salesnetwork/representation',
                title: 'اخذ نمایندگی',
            },
            {
                id: 'm3-3',
                link: 'salesnetwork/branch',
                title: 'شعب',
            },
        ],
    },
    {
        id: 'm8',
        title: 'امور مشتریان',
        link: '',
        children: [
            {
                id: 'm8-1',
                link: 'customerservice/damagebranch',
                title: 'شعب دریافت خسارت',
            },
            {
                id: 'm8-2',
                link: 'customerservice/healthcenter',
                title: 'مراکز درمانی',
            },
            {
                id: 'm8-3',
                link: 'customerservice/suggestions',
                title: 'انتقادات و پیشنهادات',
            },
        ],
    },
    {
        id: 'm4',
        title: 'قوانین و مقررات',
        link: '',
        children: [
            {
                id: 'm4-1',
                link: 'rules/brochure',
                title: 'بروشور',
            },
            {
                id: 'm4-2',
                link: 'rules/terms',
                title: 'شرایط عضویت در هیات مدیره',
            },
            {
                id: 'm4-3',
                link: 'rules/generalconditions',
                title: 'شرایط عمومی بیمه نامه',
            },
        ],
    },
    {
        id: 'm5',
        title: 'روابط عمومی',
        link: '',
        children: [
            {
                id: 'm5-1',
                link: 'blog',
                title: 'بلاگ'
            },
        ],
    },
    {
        id: 'm6',
        title: 'تماس با ما',
        link: 'contactus',
    },
    {
        id: 'm7',
        title: 'گزارشگری و افشای اطلاعات',
        link: 'reporting',
    },

];

export const getAllMenu = () => {
  return DUMMY_DATA;
};






