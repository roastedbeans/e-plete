import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Tailwind from 'primevue/passthrough/tailwind';

import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; // optional
import ConfirmDialog from 'primevue/confirmdialog';
import Row from 'primevue/row'; // optional
import InputNumber from 'primevue/inputnumber';
import MultiSelect from 'primevue/multiselect';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';
import Dropdown from 'primevue/dropdown';
import TabMenu from 'primevue/tabmenu';
import Menubar from 'primevue/menubar';
import Calendar from 'primevue/calendar';
import Chips from 'primevue/chips';
import InputText from 'primevue/inputtext';
import Fieldset from 'primevue/fieldset';
import Sidebar from 'primevue/sidebar';
import ProgressSpinner from 'primevue/progressspinner';
import Tooltip from 'primevue/tooltip';
import Paginator from 'primevue/paginator';

import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {
	const app = nuxtApp.vueApp;
	app.use(PrimeVue, ConfirmationService, ToastService, { ripple: true, unstyled: true, pt: Tailwind });

	app.component('Button', Button);
	app.component('DataTable', DataTable);
	app.component('Dialog', Dialog);
	app.component('Column', Column);
	app.component('ColumnGroup', ColumnGroup);
	app.component('ConfirmDialog', ConfirmDialog);
	app.component('Row', Row);
	app.component('InputNumber', InputNumber);
	app.component('MultiSelect', MultiSelect);
	app.component('Tag', Tag);
	app.component('Dropdown', Dropdown);
	app.component('TabMenu', TabMenu);
	app.component('Menubar', Menubar);
	app.component('Calendar', Calendar);
	app.component('Toast', Toast);
	app.component('Chips', Chips);
	app.component('InputText', InputText);
	app.component('Fieldset', Fieldset);
	app.component('Sidebar', Sidebar);
	app.component('ProgressSpinner', ProgressSpinner);
	app.directive('tooltip', Tooltip);
	app.component('Paginator', Paginator);
});
