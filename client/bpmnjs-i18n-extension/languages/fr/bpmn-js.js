/**
 * Copyright 2021 FlowSquad GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This file contains the strings used in the bpmn-js module.
 */
export default {
    'Append {type}': 'Ajouter {type}',
    'Add Lane above': 'Ajouter une voie au-dessus',
    'Divide into two Lanes': 'Diviser en deux voies',
    'Divide into three Lanes': 'Diviser en trois voies',
    'Add Lane below': 'Ajouter une voie en-dessous',
    'Append ReceiveTask': 'Ajouter une tâche de réception',
    'Append MessageIntermediateCatchEvent': 'Ajouter un événement intermédiaire de réception de message',
    'Append TimerIntermediateCatchEvent': 'Ajouter un événement intermédiaire de minuterie',
    'Append ConditionIntermediateCatchEvent': 'Ajouter un événement intermédiaire conditionnel',
    'Append SignalIntermediateCatchEvent': 'Ajouter un événement intermédiaire de signal',
    'Append compensation activity': 'Ajouter une activité de compensation',
    'Append EndEvent': 'Ajouter un événement de fin',
    'Append Gateway': 'Ajouter une passerelle',
    'Append Task': 'Ajouter une tâche',
    'Append Intermediate/Boundary Event': 'Ajouter un événement intermédiaire/frontalier',
    'Change type': 'Changer le type',
    'Connect using Association': 'Connecter par association',
    'Connect using Sequence/MessageFlow or Association': 'Connecter par flux de séquence/message ou association',
    'Connect using DataInputAssociation': 'Connecter par association de données d\'entrée',
    'Remove': 'Supprimer',
    'no shape type specified': 'aucun type de forme spécifié',
    'out of bounds release': 'libération hors limites',
    'more than {count} child lanes': 'plus de {count} voies enfants',
    'element required': 'élément requis',
    'no parent for {element} in {parent}': 'pas de parent pour {element} dans {parent}',
    'Create {type}': 'Créer {type}',
    'Activate the hand tool': 'Activer l\'outil main',
    'Activate the lasso tool': 'Activer l\'outil lasso',
    'Activate the create/remove space tool': 'Activer l\'outil créer/supprimer espace',
    'Activate the global connect tool': 'Activer l\'outil de connexion globale',
    'Create StartEvent': 'Créer un événement de début',
    'Create Intermediate/Boundary Event': 'Créer un événement intermédiaire/frontalier',
    'Create EndEvent': 'Créer un événement de fin',
    'Create Gateway': 'Créer une passerelle',
    'Create Task': 'Créer une tâche',
    'Create DataObjectReference': 'Créer une référence d\'objet de données',
    'Create DataStoreReference': 'Créer une référence de stockage de données',
    'Create expanded SubProcess': 'Créer un sous-processus étendu',
    'Create Pool/Participant': 'Créer un pool/participant',
    'Create Group': 'Créer un groupe',
    'Parallel Multi Instance': 'Instance multiple parallèle',
    'Sequential Multi Instance': 'Instance multiple séquentielle',
    'Loop': 'Boucle',
    'Ad-hoc': 'Ad-hoc',
    'element {element} referenced by {referenced}#{property} not yet drawn': 'élément {element} référencé par {referenced}#{property} pas encore dessiné',
    'unknown di {di} for element {semantic}': 'di {di} inconnu pour l\'élément {semantic}',
    'missing {semantic}#attachedToRef': '{semantic}#attachedToRef manquant',
    '{semantic}#{side} Ref not specified': '{semantic}#{side} Ref non spécifié',
    'already rendered {element}': '{element} déjà rendu',
    'failed to import {element}': 'échec de l\'importation de {element}',
    'multiple DI elements defined for {element}': 'éléments DI multiples définis pour {element}',
    'no bpmnElement referenced in {element}': 'aucun élément bpmn référencé dans {element}',
    'diagram not part of bpmn:Definitions': 'diagramme ne fait pas partie des définitions bpmn',
    'no diagram to display': 'aucun diagramme à afficher',
    'no process or collaboration to display': 'aucun processus ou collaboration à afficher',
    'correcting missing bpmnElement on {plane} to {rootElement}': 'correction de l\'élément bpmn manquant sur {plane} vers {rootElement}',
    'unsupported bpmnElement for {plane}: {rootElement}': 'élément bpmn non supporté pour {plane}: {rootElement}',
    'unrecognized flowElement {element} in context {context}': 'élément de flux {element} non reconnu dans le contexte {context}',
    'HELLO {you}!': 'BONJOUR {you}!'
};
