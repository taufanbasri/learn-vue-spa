<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <add-to-stream @completed="addStatus"></add-to-stream>

                <div class="messag" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said...
                        </p>
                        <p>
                            {{ status.created_at | ago }}
                        </p>
                    </div>
                    <div class="mess-body" v-text="status.body"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import Status from '../models/Status';
    import AddToStream from '../components/AddToStream'

    export default {
        components: {
            AddToStream
        },
        data() {
            return {
                statuses: []
            }
        },
        filters: {
            ago (date) {
                return moment(date).fromNow();
            }
        },

        created() {
          Status.all(statuses => this.statuses = statuses)
        },

        methods: {
          addStatus(status) {
              this.statuses.unshift(status);

              alert('Your status has been added to the stream.');
          }
        }
    }
</script>
