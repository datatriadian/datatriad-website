/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils';
import DataTriadLogo from '@/components/DataTriadLogo.vue';

describe('DataTriadLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(DataTriadLogo);
    expect(wrapper.vm).toBeTruthy();
  });
});
