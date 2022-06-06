import DownloadCard from "../components/ui/download-card";
import Umbrella from "../components/icons/umbrella";
import Lamp from "../components/icons/product/lamp";

const DUMMY_DATA = [
    {
        id: 'personal insurance',
        tabTitle: 'آشنایی با بیمه اشخاص',
        icon: <Lamp></Lamp>,
        contentTitle: 'معرفی بیمه اشخاص',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.' +
            'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم. تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم. تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم. تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n',
    },
    {
        id: 'insurance statement',
        tabTitle: 'آشنایی با اصطلاحات بیمه اشخاص',
        icon:
            <svg version="1.1" width="26" height="26" x="0" y="0" viewBox="0 0 512 512"><g><g xmlns="http://www.w3.org/2000/svg"><path d="m196.606 244.484c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l46.667 46.667c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l93.333-93.333c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-82.727 82.726z" fill="#595760" data-original="#000000" className=""></path><path
                d="m445.91 70c-43.235 0-82.625-23.756-102.796-61.998-2.595-4.922-7.703-8.002-13.267-8.002h-147.694c-5.564 0-10.672 3.08-13.268 8.002-20.17 38.242-59.56 61.998-102.885 61.998-8.284 0-15 6.716-15 15v152.751c0 61.408 19.187 120.046 55.486 169.576 36.301 49.53 86.439 85.484 144.997 103.976 1.47.464 2.993.696 4.517.696s3.047-.232 4.517-.696c58.558-18.492 108.696-54.446 144.997-103.976 36.299-49.53 55.486-108.168 55.486-169.576v-152.751c0-8.284-6.806-15-15.09-15zm-14.91 167.751c0 111.014-70.126 208.26-175 243.474-104.874-35.214-175-132.46-175-243.474v-138.504c45.398-4.608 85.998-30.085 109.878-69.247h130.245c23.867 39.142 64.443 64.613 109.877 69.24z"
                fill="#595760" data-original="#000000" className=""></path><path
                d="m309.598 65.508c-2.849-3.486-7.114-5.508-11.616-5.508h-83.965c-4.502 0-8.766 2.022-11.614 5.508-21.21 25.951-49.25 45.201-81.088 55.667-6.155 2.023-10.315 7.77-10.315 14.25v102.327c0 91.862 54.649 174.007 139.227 209.274 1.848.77 3.811 1.155 5.773 1.155s3.926-.385 5.773-1.155c84.578-35.267 139.227-117.412 139.227-209.274v-102.317c0-6.479-4.159-12.226-10.314-14.25-31.839-10.47-59.879-29.722-81.088-55.677zm61.402 172.244c0 77.604-44.931 147.211-115 179.07-70.069-31.858-115-101.465-115-179.07v-91.774c30.784-11.964 58.157-31.114 79.968-55.978h70.063c21.812 24.867 49.182 44.02 79.969 55.986z"
                fill="#595760" data-original="#000000" className=""></path></g></g></svg>
        ,
        contentTitle: 'معانی برخی از اصطلاحات کاربردی در آیین نامه اجرایی قانون صدر الاشاره',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.',
    },
    {
        id: 'terms',
        tabTitle: 'تعهدات و ضوابط',
        icon: <svg version="1.1"
                   width="26" height="26" x="0" y="0" viewBox="0 0 512 512"><g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<path
            d="M341.333,281.6c-28.237,0-51.2,22.963-51.2,51.2c0,28.237,22.963,51.2,51.2,51.2c28.237,0,51.2-22.963,51.2-51.2    C392.533,304.563,369.57,281.6,341.333,281.6z M341.333,366.933c-18.825,0-34.133-15.309-34.133-34.133    c0-18.825,15.309-34.133,34.133-34.133c18.825,0,34.133,15.309,34.133,34.133C375.467,351.625,360.158,366.933,341.333,366.933z"
            fill="#595760" data-original="#000000" className=""></path>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<path
            d="M358.4,366.933v35.26l-12.339-8.226c-2.867-1.92-6.596-1.92-9.464,0l-12.331,8.226v-35.26H307.2v51.2    c0,3.149,1.732,6.042,4.514,7.526c2.765,1.485,6.144,1.314,8.755-0.427l20.864-13.909l20.864,13.909    c1.425,0.947,3.081,1.434,4.736,1.434c1.382,0,2.765-0.333,4.028-1.007c2.773-1.485,4.506-4.378,4.506-7.526v-51.2H358.4z"
            fill="#595760" data-original="#000000" className=""></path>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<rect x="196.267" y="85.333" width="110.933" height="17.067" fill="#595760" data-original="#000000"
              className=""></rect>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<rect x="119.467" y="136.533" width="273.067" height="17.067" fill="#595760" data-original="#000000"
              className=""></rect>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<rect x="119.467" y="187.733" width="187.733" height="17.067" fill="#595760" data-original="#000000"
              className=""></rect>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<rect x="341.333" y="187.733" width="51.2" height="17.067" fill="#595760" data-original="#000000"
              className=""></rect>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<rect x="119.467" y="238.933" width="273.067" height="17.067" fill="#595760" data-original="#000000"
              className=""></rect>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<rect x="119.467" y="290.133" width="102.4" height="17.067" fill="#595760" data-original="#000000"
              className=""></rect>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<rect x="119.467" y="332.8" width="42.667" height="17.067" fill="#595760" data-original="#000000"
              className=""></rect>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<rect x="196.267" y="332.8" width="25.6" height="17.067" fill="#595760" data-original="#000000"
              className=""></rect>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<path
            d="M469.333,0c-23.526,0-42.667,19.14-42.667,42.667v17.067c0,4.71,3.814,8.533,8.533,8.533h68.267    c4.719,0,8.533-3.823,8.533-8.533V42.667C512,19.14,492.86,0,469.333,0z M494.933,51.2h-51.2v-8.533    c0-14.114,11.486-25.6,25.6-25.6s25.6,11.486,25.6,25.6V51.2z"
            fill="#595760" data-original="#000000" className=""></path>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<path
            d="M469.333,0h-358.4C87.407,0,68.267,19.14,68.267,42.667v409.6h17.067v-409.6c0-14.114,11.486-25.6,25.6-25.6h324.284    c-5.367,7.134-8.55,16-8.55,25.6v426.667c0,14.114-11.486,25.6-25.6,25.6H76.8V512h324.267c23.526,0,42.667-19.14,42.667-42.667    V42.667c0-14.114,11.486-25.6,25.6-25.6c4.719,0,8.533-3.823,8.533-8.533S474.052,0,469.333,0z"
            fill="#595760" data-original="#000000" className=""></path>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<path
            d="M401.067,494.933c-14.114,0-25.6-11.486-25.6-25.6v-17.067c0-4.719-3.814-8.533-8.533-8.533H8.533    c-4.71,0-8.533,3.814-8.533,8.533v17.067C0,492.86,19.14,512,42.667,512h358.4c4.719,0,8.533-3.814,8.533-8.533    C409.6,498.748,405.786,494.933,401.067,494.933z M42.667,494.933c-14.114,0-25.6-11.486-25.6-25.6V460.8H358.4v8.533    c0,9.6,3.183,18.466,8.55,25.6H42.667z"
            fill="#595760" data-original="#000000" className=""></path>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
</g></svg>,
        contentTitle: 'تعهدات و ضوابط بیمه اشخاص',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.',
    },
    {
        id: 'guidance',
        tabTitle: 'راهنمای صدور بیمه نامه',
        icon: <svg width="26" height="26" x="0" y="0" viewBox="0 0 512 512"><g>
<g xmlns="http://www.w3.org/2000/svg">
	<g>
		<g>
			<path
                d="M256,162.133c2.263,0.001,4.434-0.898,6.035-2.499c1.6-1.6,2.499-3.771,2.499-6.035V85.333     c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533V153.6c-0.001,2.263,0.898,4.434,2.499,6.035     C251.566,161.235,253.737,162.134,256,162.133z"
                fill="#595760" data-original="#000000" className="hovered-path"></path>
            <path
                d="M494.933,93.867h-17.067V59.733c-0.011-9.421-7.646-17.056-17.067-17.067H339.002C319.837,15.888,288.93,0,256,0     c-32.93,0-63.837,15.888-83.002,42.667H51.2c-9.421,0.011-17.056,7.645-17.067,17.067v34.133H17.067     C7.645,93.877,0.011,101.512,0,110.933V460.8c0.011,9.421,7.645,17.056,17.067,17.067h185.175C212.033,498.7,232.98,512,256,512     s43.967-13.3,53.758-34.133h185.175c9.421-0.011,17.056-7.645,17.067-17.067V110.933     C511.989,101.512,504.355,93.877,494.933,93.867z M348.968,59.733H460.8v281.6H307.2c-16.07-0.002-31.458,6.494-42.667,18.01     V204.368c33.265-2.693,63.115-21.473,79.941-50.295C361.3,125.251,362.978,90.024,348.968,59.733z M307.2,401.067h153.6v25.6     H264.533v-25.6c0.028-23.553,19.114-42.639,42.667-42.667h153.6V384H307.2c-4.713,0-8.533,3.821-8.533,8.533     C298.667,397.246,302.487,401.067,307.2,401.067z M256,17.067c47.128,0,85.333,38.205,85.333,85.333S303.128,187.733,256,187.733     s-85.333-38.205-85.333-85.333C170.721,55.294,208.894,17.121,256,17.067z M51.2,59.733h111.832     c-14.01,30.291-12.333,65.517,4.493,94.34c16.826,28.822,46.676,47.602,79.941,50.295v154.975     c-11.208-11.516-26.596-18.012-42.667-18.01H51.2V59.733z M51.2,401.067h153.6c4.713,0,8.533-3.821,8.533-8.533     c0-4.713-3.821-8.533-8.533-8.533H51.2v-25.6h153.6c23.553,0.028,42.639,19.114,42.667,42.667v25.6H51.2V401.067z M494.933,460.8     H304.217c-0.094,0-0.171,0.05-0.265,0.053c-0.604,0.054-1.201,0.174-1.779,0.359c-1.008,0.09-1.957,0.516-2.693,1.211     c-0.958,0.465-1.731,1.241-2.192,2.201c-0.396,0.516-0.729,1.078-0.993,1.673c-0.033,0.087-0.106,0.144-0.138,0.232     c-6.013,17.022-22.105,28.404-40.158,28.404c-18.053,0-34.145-11.382-40.158-28.404c-0.031-0.089-0.104-0.145-0.138-0.232     c-0.259-0.58-0.583-1.129-0.967-1.635c-0.44-0.939-1.184-1.703-2.112-2.167c-0.416-0.343-0.865-0.645-1.339-0.902     c-0.446-0.159-0.905-0.28-1.371-0.362c-0.608-0.199-1.237-0.326-1.875-0.379c-0.092-0.003-0.167-0.052-0.258-0.052H17.067     V110.933h17.067v315.733c0.011,9.421,7.645,17.056,17.067,17.067h409.6c9.421-0.011,17.056-7.645,17.067-17.067V110.933h17.067     V460.8z"
                fill="#595760" data-original="#000000" className="hovered-path"></path>
            <path
                d="M341.333,204.8c-0.001,2.263,0.898,4.434,2.499,6.035c1.6,1.6,3.771,2.499,6.035,2.499H435.2     c4.713,0,8.533-3.821,8.533-8.533s-3.82-8.533-8.533-8.533h-85.333c-2.263-0.001-4.434,0.898-6.035,2.499     C342.232,200.366,341.333,202.537,341.333,204.8z"
                fill="#595760" data-original="#000000" className="hovered-path"></path>
            <path
                d="M435.2,238.933H315.733c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533H435.2c4.713,0,8.533-3.82,8.533-8.533     S439.913,238.933,435.2,238.933z"
                fill="#595760" data-original="#000000" className="hovered-path"></path>
            <path
                d="M435.2,281.6H315.733c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533H435.2c4.713,0,8.533-3.82,8.533-8.533     S439.913,281.6,435.2,281.6z"
                fill="#595760" data-original="#000000" className="hovered-path"></path>
            <path
                d="M76.8,213.333h85.333c4.713,0,8.533-3.821,8.533-8.533s-3.82-8.533-8.533-8.533H76.8c-4.713,0-8.533,3.82-8.533,8.533     S72.087,213.333,76.8,213.333z"
                fill="#595760" data-original="#000000" className="hovered-path"></path>
            <path
                d="M76.8,256h119.467c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H76.8c-4.713,0-8.533,3.82-8.533,8.533     S72.087,256,76.8,256z"
                fill="#595760" data-original="#000000" className="hovered-path"></path>
            <path
                d="M196.267,281.6H76.8c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h119.467c4.713,0,8.533-3.82,8.533-8.533     S200.979,281.6,196.267,281.6z"
                fill="#595760" data-original="#000000" className="hovered-path"></path>
            <path
                d="M256,59.733c2.263,0.001,4.434-0.898,6.035-2.499c1.6-1.6,2.499-3.771,2.499-6.035v-8.533     c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533V51.2c-0.001,2.263,0.898,4.434,2.499,6.035     C251.566,58.835,253.737,59.734,256,59.733z"
                fill="#595760" data-original="#000000" className="hovered-path"></path>
		</g>
	</g>
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
<g xmlns="http://www.w3.org/2000/svg">
</g>
</g></svg>,
        contentTitle: 'راهنمای صدور بیمه نامه اشخاص ',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.',
    },
    {
        id: 'help',
        tabTitle: 'راهنمای پرداخت خسارت',
        icon: <svg width="26" height="26" x="0" y="0" viewBox="0 0 512 512"><g><path xmlns="http://www.w3.org/2000/svg" d="m476.122 340.313c-7.016-33.845-37.06-59.361-72.955-59.361-41.082 0-74.504 33.422-74.504 74.504 0 22.055 9.641 41.893 24.92 55.547 7.088 34.582 37.335 59.407 72.947 59.407 41.085 0 74.51-33.425 74.51-74.51 0-21.338-9.051-41.438-24.918-55.587zm-132.459 15.143c0-32.811 26.693-59.504 59.504-59.504 32.812 0 59.505 26.693 59.505 59.504s-26.693 59.504-59.505 59.504c-32.811 0-59.504-26.693-59.504-59.504zm82.867 99.954c-22.547 0-42.398-12.461-52.481-31.38 8.95 3.815 18.791 5.93 29.118 5.93 38.007 0 69.437-28.614 73.932-65.427 5.785 9.306 8.941 20.12 8.941 31.367 0 32.814-26.696 59.51-59.51 59.51z" fill="#595760" data-original="#000000"></path><path xmlns="http://www.w3.org/2000/svg" d="m438.58 80.923c-2.904-2.955-7.652-2.996-10.606-.093s-2.996 7.652-.093 10.606c38.951 39.642 62.61 90.458 67.957 145.075-14.172-13.517-33.164-21.342-53.458-21.342-21.099 0-40.788 8.461-55.12 22.974-2.57-59.157-15.365-114.188-36.693-156.844-12.148-24.297-26.407-43.232-42.041-56.245 35.566 7.848 68.801 23.731 97.958 47.061 3.233 2.587 7.953 2.063 10.542-1.17 2.588-3.234 2.063-7.954-1.171-10.542-22.22-17.779-47.01-31.628-73.683-41.162-27.604-9.868-56.597-14.871-86.172-14.871-68.379 0-132.666 26.629-181.019 74.982-48.352 48.352-74.981 112.639-74.981 181.018 0 3.455 2.36 6.463 5.716 7.285 3.358.821 6.839-.755 8.436-3.819 10.818-20.766 32.076-33.666 55.478-33.666 23.396 0 44.65 12.9 55.469 33.665 1.292 2.479 3.855 4.035 6.651 4.035s5.359-1.555 6.651-4.035c10.818-20.765 32.076-33.665 55.479-33.665 14.671 0 28.499 5.074 39.44 13.978v205.192c0 7.13-5.796 12.93-12.92 12.93-3.459 0-6.713-1.346-9.157-3.783-1.995-1.995-3.294-4.601-3.659-7.34-1.656-12.396-13.08-21.136-25.478-19.481-12.396 1.656-21.136 13.089-19.48 25.487 1.677 12.556 7.555 24.425 16.56 33.429 11.027 10.994 25.665 17.048 41.215 17.048 32.136 0 58.279-26.149 58.279-58.29v-205.191c10.943-8.905 24.774-13.979 39.45-13.979 23.396 0 44.65 12.9 55.469 33.665 1.292 2.479 3.855 4.035 6.651 4.035s5.359-1.555 6.651-4.035c10.818-20.765 32.076-33.665 55.479-33.665 23.396 0 44.65 12.9 55.469 33.665 1.313 2.521 3.903 4.035 6.65 4.035.591 0 1.19-.07 1.785-.216 3.355-.822 5.716-3.83 5.716-7.285 0-67.532-26.074-131.261-73.42-179.446zm-368.95 134.247c-20.3 0-39.298 7.828-53.472 21.347 5.404-55.362 29.581-106.709 69.43-146.558 32.86-32.86 73.54-55.057 117.841-64.865-15.616 13.012-29.859 31.933-41.995 56.206-21.328 42.656-34.123 97.688-36.693 156.844-14.331-14.513-34.016-22.974-55.111-22.974zm70.165 21.948c2.637-56.428 14.849-108.696 35.055-149.11 20.291-40.582 46.205-64.431 73.649-68.119v217.758c-14.287-14.211-33.766-22.477-54.62-22.477-20.595 0-39.846 8.064-54.084 21.948zm80.605 255.512c-11.553 0-22.429-4.5-30.617-12.663-6.682-6.681-11.046-15.489-12.29-24.799-.561-4.2 2.4-8.073 6.6-8.634 4.188-.562 8.063 2.4 8.623 6.595.796 5.983 3.609 11.653 7.928 15.971 5.282 5.269 12.298 8.17 19.757 8.17 15.396 0 27.92-12.53 27.92-27.93v-187.398c.352.624.696 1.255 1.028 1.894 1.292 2.479 3.855 4.035 6.651 4.035s5.359-1.555 6.651-4.035c.333-.639.676-1.27 1.028-1.894v187.398c.001 23.87-19.414 43.29-43.279 43.29zm97.73-277.46c-20.859 0-40.341 8.266-54.63 22.477v-217.758c27.444 3.688 53.359 27.538 73.649 68.119 20.207 40.413 32.418 92.681 35.055 149.109-14.235-13.883-33.482-21.947-54.074-21.947z" fill="#595760" data-original="#000000"></path><path xmlns="http://www.w3.org/2000/svg" d="m106.05 306.36c-41.085 0-74.51 33.425-74.51 74.51 0 15.984 4.992 31.224 14.437 44.072 2.453 3.338 7.147 4.054 10.485 1.601 3.337-2.453 4.054-7.147 1.601-10.485-7.538-10.255-11.522-22.423-11.522-35.188 0-32.814 26.696-59.51 59.51-59.51 32.809 0 59.5 26.696 59.5 59.51 0 32.808-26.691 59.5-59.5 59.5-9.708 0-19.321-2.38-27.802-6.884-3.658-1.942-8.198-.552-10.142 3.106-1.942 3.658-.552 8.199 3.106 10.142 10.639 5.65 22.686 8.636 34.837 8.636 41.079 0 74.5-33.421 74.5-74.5 0-41.085-33.421-74.51-74.5-74.51z" fill="#595760" data-original="#000000"></path><path xmlns="http://www.w3.org/2000/svg" d="m412.67 348.919c-1.136-.402-2.294-.819-3.452-1.249v-20.727c1.753.663 2.972 1.492 3.546 1.938 2.837 2.202 6.919 1.687 9.12-1.147 2.202-2.835 1.688-6.919-1.147-9.121-1.57-1.219-5.634-3.97-11.519-5.129v-3.61c0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5v4.064c-.404.105-.812.219-1.224.343-7.714 2.324-13.475 8.909-15.035 17.186-1.431 7.595 1.035 14.945 6.436 19.18 2.551 2.001 5.661 3.836 9.823 5.743v27.525c-2.953-.413-5.157-1.412-8.683-3.719-3.004-1.965-7.033-1.123-8.998 1.881s-1.123 7.032 1.881 8.998c6.18 4.043 10.539 5.462 15.8 5.915v4.05c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5v-4.673c10.821-2.74 17.756-11.982 19.287-21.093 1.97-11.72-4.394-22.311-15.835-26.355zm-18.252-8.502c-1.544-1.21-2.204-3.779-1.684-6.544.378-2.008 1.485-4.32 3.483-5.846v13.656c-.647-.415-1.252-.836-1.799-1.266zm21.267 32.701c-.595 3.538-2.79 7.259-6.467 9.357v-20.941c7.054 2.971 6.895 9.036 6.467 11.584z" fill="#595760" data-original="#000000"></path><path xmlns="http://www.w3.org/2000/svg" d="m115.548 374.331c-1.136-.402-2.294-.819-3.452-1.249v-20.727c1.753.663 2.972 1.493 3.546 1.938 2.837 2.202 6.919 1.687 9.12-1.147 2.202-2.835 1.688-6.919-1.147-9.121-1.57-1.219-5.634-3.97-11.519-5.13v-3.61c0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5v4.064c-.404.105-.812.218-1.223.342-7.715 2.324-13.476 8.909-15.035 17.187-1.432 7.595 1.034 14.944 6.435 19.18 2.551 2.001 5.661 3.835 9.823 5.742v27.523c-2.949-.413-5.16-1.413-8.683-3.717-3.005-1.965-7.033-1.124-8.998 1.881-1.965 3.004-1.123 7.032 1.881 8.998 6.18 4.043 10.539 5.462 15.8 5.915v4.05c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5v-4.673c10.821-2.74 17.756-11.982 19.287-21.093 1.971-11.718-4.394-22.309-15.835-26.353zm-18.252-8.502c-1.544-1.21-2.204-3.779-1.684-6.543.378-2.008 1.484-4.32 3.483-5.846v13.655c-.647-.415-1.251-.837-1.799-1.266zm21.267 32.701c-.594 3.538-2.79 7.259-6.467 9.357v-20.941c7.054 2.971 6.895 9.036 6.467 11.584z" fill="#595760" data-original="#000000"></path></g></svg>,
        contentTitle: 'معانی برخی از اصطلاحات کاربردی در آیین نامه اجرایی قانون صدر الاشاره',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.درصورتیکه بیمه شده مبلغ خسارت رادرخارج ازکشورشخصا” پرداخت نماید ، میتواند پس از مراجعت ازسفر و درداخل کشور بر حسب مورد وخسارت وارد شده با همراه داشتن اصل صورت حسابهای تایید شده وپاسپورت خود نسبت به پیگیری خسارت اقدام نماید . مشروط بر اینکه ظرف مهلت مقرر خسارت به بیمه گر اعلام شده باشد .',
    },
    {
        id: 'document',
        tabTitle: 'مدارک و شرایط',
        icon: <svg width="26" height="26" x="0" y="0" viewBox="0 0 480.08177 480"><g><path xmlns="http://www.w3.org/2000/svg" d="m479.199219 113.800781c-1.652344-6.144531-5.683594-11.382812-11.199219-14.558593-5.519531-3.191407-12.082031-4.054688-18.238281-2.402344-6.148438 1.65625-11.386719 5.683594-14.5625 11.199218l-4 6.960938c-3.800781-2.183594-8.65625-.898438-10.878907 2.882812l-20.320312 34.636719-6.960938-4c-1.84375-1.066406-4.039062-1.355469-6.09375-.800781-2.058593.558594-3.808593 1.910156-4.867187 3.761719-2.167969 3.824219-.847656 8.683593 2.960937 10.878906l6.960938 4-68 117.839844-16.800781 44.882812-8 14.957031c-4.683594 8.148438-4.183594 18.277344 1.28125 25.921876l-18 22.078124-5.039063-12.636718c-2.273437-5.632813-7.535156-9.492188-13.585937-9.964844-6.054688-.476562-11.855469 2.515625-14.976563 7.722656l-2.878906 4.878906-2.71875-32c-.625-7.570312-6.488281-13.65625-14.027344-14.570312-7.542968-.910156-14.683594 3.609375-17.09375 10.8125l-19.679687 59.039062c-1.375 4.175782.875 8.675782 5.039062 10.082032.78125.363281 1.621094.582031 2.480469.636718 3.4375.011719 6.5-2.179687 7.601562-5.4375l19.597657-59.039062 2.800781 32.476562c.578125 6.929688 5.558594 12.691407 12.332031 14.261719 6.773438 1.570313 13.78125-1.414062 17.347657-7.378906l2.960937-4.882813 4.960937 12.5625c2.105469 5.292969 6.867188 9.070313 12.503907 9.910157 5.636719.839843 11.292969-1.382813 14.855469-5.832031l18.640624-23.597657c2.0625.539063 4.1875.808594 6.320313.800781 8.574219.066407 16.535156-4.449218 20.878906-11.84375l8-13.359374 30.480469-37.039063 68.71875-119.28125 6.960938 4c1.855468 1.0625 3.207031 2.816406 3.757812 4.882813.554688 2.050781.265625 4.238281-.796875 6.078124l-32 55.441407c-1.207031 1.820312-1.617187 4.054687-1.132813 6.1875.484376 2.128906 1.816407 3.96875 3.691407 5.089843 1.84375 1.070313 4.039062 1.359376 6.09375.804688 2.058593-.558594 3.808593-1.910156 4.867187-3.761719l32-55.441406c3.191406-5.519531 4.054688-12.082031 2.398438-18.238281-1.65625-6.148438-5.683594-11.386719-11.199219-14.5625l-6.960937-4 20-34.640625c2.183593-3.800781.898437-8.652344-2.878907-10.878907l4-6.960937c3.277344-5.605469 4.144531-12.300781 2.398438-18.558594zm-30.160157 2.238281c1.058594-1.851562 2.816407-3.207031 4.882813-3.757812 2.054687-.507812 4.226563-.222656 6.078125.800781 1.855469 1.058594 3.207031 2.816407 3.761719 4.878907.507812 2.054687.222656 4.226562-.800781 6.078124l-4 6.960938-13.921876-8zm-109.039062 223.363282-4-2.320313-11.839844-6.882812 11.359375-30.398438 25.199219 14.558594zm-24 23.117187c-3.378906-2.355469-4.417969-6.886719-2.398438-10.480469l4-6.957031 13.917969 8-4 6.878907c-1.121093 1.945312-3.003906 3.328124-5.195312 3.816406-2.191407.484375-4.484375.03125-6.324219-1.257813zm53.839844-61.277343-27.679688-16 64-110.882813 27.679688 16zm72-124.722657-27.679688-16 16-27.679687 27.679688 16zm0 0" fill="#595760" data-original="#000000" className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m126.238281 358.519531-28.316406 28.242188-16.960937-16.960938c-3.121094-3.101562-8.160157-3.101562-11.28125 0-1.515626 1.503907-2.367188 3.546875-2.367188 5.679688 0 2.132812.851562 4.179687 2.367188 5.679687l16.960937 16.960938c3 2.976562 7.054687 4.644531 11.28125 4.640625 4.25.023437 8.339844-1.644531 11.359375-4.640625l28.238281-28.320313c2.71875-3.175781 2.535157-7.90625-.417969-10.859375-2.957031-2.957031-7.6875-3.140625-10.863281-.421875zm0 0"
            fill="#595760" data-original="#000000" className=""></path><path xmlns="http://www.w3.org/2000/svg"
                                                                             d="m32 380.039062c0 37.558594 30.445312 68 68 68s68-30.441406 68-68c0-4.417968-3.582031-8-8-8s-8 3.582032-8 8c0 28.71875-23.28125 52-52 52s-52-23.28125-52-52 23.28125-52 52-52c11.257812-.03125 22.214844 3.621094 31.199219 10.402344 3.535156 2.652344 8.550781 1.933594 11.199219-1.601562 2.652343-3.535156 1.9375-8.546875-1.597657-11.199219-20.605469-15.453125-48.175781-17.9375-71.210937-6.421875-23.039063 11.519531-37.589844 35.066406-37.589844 60.820312zm0 0"
                                                                             fill="#595760" data-original="#000000"
                                                                             className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m288 64.039062c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-208c-4.417969 0-8 3.582032-8 8v32c0 4.421876 3.582031 8 8 8h208c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-200v-16zm0 0"
            fill="#595760" data-original="#000000" className=""></path><path xmlns="http://www.w3.org/2000/svg"
                                                                             d="m104 112.039062c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h160c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8zm0 0"
                                                                             fill="#595760" data-original="#000000"
                                                                             className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m312 168.039062h-176c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h176c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8zm0 0"
            fill="#595760" data-original="#000000" className=""></path><path xmlns="http://www.w3.org/2000/svg"
                                                                             d="m232 224.039062c0-4.417968-3.582031-8-8-8h-160c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h160c4.417969 0 8-3.578124 8-8zm0 0"
                                                                             fill="#595760" data-original="#000000"
                                                                             className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m312 216.039062h-56c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8h56c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8zm0 0"
            fill="#595760" data-original="#000000" className=""></path><path xmlns="http://www.w3.org/2000/svg"
                                                                             d="m144 272.039062c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-80c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8zm0 0"
                                                                             fill="#595760" data-original="#000000"
                                                                             className=""></path><path
            xmlns="http://www.w3.org/2000/svg"
            d="m176 272.039062h56c4.417969 0 8-3.578124 8-8 0-4.417968-3.582031-8-8-8h-56c-4.417969 0-8 3.582032-8 8 0 4.421876 3.582031 8 8 8zm0 0"
            fill="#595760" data-original="#000000" className=""></path><path xmlns="http://www.w3.org/2000/svg"
                                                                             d="m360 368.039062c-4.417969 0-8 3.582032-8 8v80c0 4.421876-3.582031 8-8 8h-320c-4.417969 0-8-3.578124-8-8v-432c0-4.417968 3.582031-8 8-8h320c4.417969 0 8 3.582032 8 8v150.242188c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-150.242188c0-13.253906-10.746094-23.9999995-24-23.9999995h-320c-13.253906 0-24 10.7460935-24 23.9999995v432c0 13.257813 10.746094 24 24 24h320c13.253906 0 24-10.742187 24-24v-80c0-4.417968-3.582031-8-8-8zm0 0"
                                                                             fill="#595760" data-original="#000000"
                                                                             className=""></path></g></svg>,
        contentTitle: 'معانی برخی از اصطلاحات کاربردی در آیین نامه اجرایی قانون صدر الاشاره',
        contentDesc: 'تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.\n' +
            '                                تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.تعاریف و اصطلاحات مرتبط با بیمه های اشخاص در ذیل آورده شده است و در ادامه به قوانین مجازات های اسلامی می آوریم.',
    },
    {
        id: 'download',
        tabTitle: 'دانلود کاتالوگ',
        icon: <svg width="26" height="26" x="0" y="0" viewBox="0 0 512 512"><g transform="matrix(-1,-2.4492935982947064e-16,-2.4492935982947064e-16,1,511.99993896484386,2.842170943040401e-14)"><g xmlns="http://www.w3.org/2000/svg"><path d="m453.896 118.19-38.303-38.301v-57.131c0-12.549-10.209-22.758-22.759-22.758h-314.453c-12.392 0-22.474 10.082-22.474 22.474v377.031c0 12.392 10.082 22.474 22.474 22.474h12.712v12.524c0 12.392 10.082 22.474 22.475 22.474h48.753c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-48.753c-4.122 0-7.475-3.353-7.475-7.474v-301.544c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v274.02h-12.712c-4.121 0-7.474-3.353-7.474-7.474v-377.031c0-4.121 3.353-7.474 7.474-7.474h314.454c4.278 0 7.759 3.48 7.759 7.758v42.132l-27.697-27.695c-1.407-1.406-3.314-2.196-5.303-2.196h-254.026c-12.393 0-22.475 10.082-22.475 22.474v40.573c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-40.574c0-4.121 3.353-7.474 7.475-7.474h246.525v73.482c0 4.142 3.357 7.499 7.499 7.5l73.501.012v303.51c0 4.121-3.353 7.474-7.474 7.474h-48.17c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h48.17c12.392 0 22.474-10.082 22.474-22.474v-311.008c0-1.989-.79-3.896-2.197-5.304zm-78.803-2.209v-55.377l55.39 55.387z" fill="#595760" data-original="#000000" className=""></path><path
            d="m363.49 175.456h-179.422c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h179.422c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"
            fill="#595760" data-original="#000000" className=""></path><path
            d="m363.49 219.688h-179.422c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h179.422c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"
            fill="#595760" data-original="#000000" className=""></path><path
            d="m363.49 264.802h-35.447c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h35.447c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"
            fill="#595760" data-original="#000000" className=""></path><path
            d="m292.746 279.802c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-108.678c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"
            fill="#595760" data-original="#000000" className=""></path><path
            d="m301.273 425.012-19.994 19.993v-72.506c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v72.506l-19.994-19.993c-2.929-2.928-7.678-2.929-10.606.001-2.929 2.929-2.929 7.678 0 10.606l32.797 32.796c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196l32.797-32.796c2.929-2.929 2.929-7.678 0-10.606-2.928-2.93-7.677-2.929-10.606-.001z"
            fill="#595760" data-original="#000000" className=""></path><path
            d="m273.779 323.61c-51.941 0-94.199 42.256-94.199 94.195 0 51.938 42.258 94.194 94.199 94.194s94.199-42.256 94.199-94.194c0-51.939-42.258-94.195-94.199-94.195zm0 173.39c-43.67 0-79.199-35.526-79.199-79.194s35.529-79.195 79.199-79.195 79.199 35.527 79.199 79.195-35.529 79.194-79.199 79.194z"
            fill="#595760" data-original="#000000" className=""></path></g></g></svg>,
        contentTitle: '',
        contentDesc: <DownloadCard>
    <a href="#">جهت دریافت اطلاعات بیشتر، می توانید کاتالوگ بیمه اشخاص را دانلود کنید</a>
</DownloadCard>,
    },

];

export const getALlProduct = () => {
    return DUMMY_DATA;
};