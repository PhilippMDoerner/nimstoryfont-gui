import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { EditorModule } from '@tinymce/tinymce-angular';
import { Rule } from 'src/app/_models/rule';
import { hasSpecialCharactersMessage, integerValidator, notIntegerMessage, requiredMessage, requiredValidator, specialCharacterValidator } from 'src/app/_services/formly/validators';
import { MoleculesModule } from 'src/app/design/molecules';
import * as all from 'tinymce/tinymce';
import { AtomsModule } from '../../../design/atoms';
import { FormlyEditorFieldComponent } from '../../../design/organisms';
import { RuleComponent } from '../rule/rule.component';
import { RulesComponent } from './rules.component';

const x = all;

const dummyRule: Rule = {
  getAbsoluteRouterUrl: () => "/dnd/rules/1",
  pk: 1,
  name: "The 'Critical Hit' Rule",
  creation_datetime: "2022-03-15T10:30:00Z",
  update_datetime: "2022-03-18T16:45:00Z",
  description: `
  <p>In our campaign, we've decided to implement a 'critical hit' rule that can add some extra excitement to combat encounters. Whenever a player rolls a natural 20 on an attack roll, they will score a critical hit. This means that they will automatically hit their target, regardless of the target's AC, and will deal maximum damage for that attack. This rule applies to both players and enemies, so everyone has a chance to land a critical hit! </p>

  <p>However, there is a risk involved in attempting a critical hit. If a player rolls a natural 1 on their attack roll while attempting a critical hit, they will suffer a critical failure. This means that their attack will miss and they will take some form of penalty, such as losing their balance and falling prone, or damaging their weapon in the process. This adds an element of unpredictability to combat, and encourages players to weigh the potential rewards and risks of attempting a critical hit." </p>

  <p> This rule adds an exciting element of chance to combat encounters in the campaign, while also providing some risk and uncertainty for players who attempt to score a critical hit. By implementing this rule, players will have to think strategically about when to attempt a critical hit and when to play it safe, adding an additional layer of strategy and excitement to combat encounters. </p>
  `,
  campaign: 2,
  campaign_details: { pk: 2, name: "The Quest for the Lost City" }
};

export default {
  title: 'DesignSystem/Organisms/RulesComponent',
  component: RulesComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        AtomsModule,
        MoleculesModule,
        NgbModule,
        EditorModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            { name: 'text-editor', component: FormlyEditorFieldComponent },
          ],
          validationMessages: [
            requiredMessage,
            notIntegerMessage,
            hasSpecialCharactersMessage,
          ],
          validators: [
            requiredValidator,
            integerValidator,
            specialCharacterValidator,
          ],
        }),
      ],       
      declarations: [
        FormlyEditorFieldComponent,
        RuleComponent,
      ]
    }),
  ],
  args: {
    rules: Array(10).fill(dummyRule),
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    serverModel: undefined,
  },
} as Meta<RulesComponent>;

const Template: StoryFn<RulesComponent> = (args: RulesComponent) => ({ 
  props: {
    ...args,
    ruleDelete: action('ruleDelete'),
    ruleUpdate: action('ruleUpdate'),
    ruleCreate: action('ruleCreate'),
  },
});

export const Default = Template.bind({});
Default.args = {}


export const NoPermissions = Template.bind({});
NoPermissions.args = {
  canUpdate: false,
  canCreate: false,
  canDelete: false,
}

export const NoRules = Template.bind({});
NoRules.args = {
  rules: [],
}