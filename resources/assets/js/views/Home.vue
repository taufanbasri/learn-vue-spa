<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="messag" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said...
                        </p>
                        <p>
                            {{ postedOn(status) }}
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

    export default {
        data() {
            return {
                statuses: []
            }
        },
        created() {
          Status.all()
            // .then(response => this.statuses = response.data) code dibawah sama dengan ini
            .then(({data}) => this.statuses = data)
        },
        methods: {
          postedOn(status) {
              return moment(status.created_at).fromNow();
          }
        }
    }
</script>
