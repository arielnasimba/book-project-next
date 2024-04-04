import { createSlice } from "@reduxjs/toolkit";

//TODO: three functions not finished => removeFromCartAdmin | removeFromCartNewUser | removeUserFromDatabaseUsers
const initialState = {

    admin:{
        adminId : 1998,
        adminName: "admin",
        pwd: 123456,
        mail: "admin@gmail.com",
        isConnected: false,
        favorites: [],
        basket: [],
        allBasket:[]
    },

    newUser:{
        userId : null,
        newUserName: "",
        pwd: null,
        mail: "",
        isConnected: false,
        favorites: [],
        basket: [],
        allBasket:[]
    },

    DB_USERS:[]
}

const usersManagementSlice = createSlice( {

    name: "usersLib",
    initialState,
    reducers:{

//******************************   admin functions   ******************************************/

        // admin functions

        /** admin name check
         * 
         * @param {*} state  : admin name
         * @param {*} action : name received
         * @returns if name matches admin name
         */
        checkAdminName:(state, action) => { return( state.admin.adminName == action.payload)},
         
        /** admin password check
         * 
         * @param {*} state  : admin password
         * @param {*} action : password received
         * @returns if password matches admin password
         */
        checkAdminPwd :(state, action) => { return(state.admin.pwd == action.payload)}, 

        /** admin mail check
         * 
         * @param {*} state  : admin mail
         * @param {*} action : mail received
         * @returns if mail matches admin mail
         */
        checkAdminMail:(state, action) => { return(state.admin.mail == action.payload)}, 

        /** change logged boolean of admin 
         * 
         * @param {*} state : connected boolean attribut of admin
         */
        changeNewUserIsLogged:(state) => { 
            !state.admin.isConnected;
        },
        
        /** add game to favorites array of admin
         * 
         * @param {*} state  : admin favorites array
         * @param {*} action : game received
         */
        addToFavsAdmin:( state, action) => { 
            const item = action.payload;
            const existingItem = state.admin.favorites.findIndex(game => game.id == item.id);
            if (existingItem === -1 ) {
                state.admin.favorites.push(item);
            }
        }, 

        /** remove game from favorites array of admin
         * 
         * @param {*} state  : admin favorites array
         * @param {*} action : game received
         */
        removeFromFavsAdmin:( state, action) => { 
            const indexToDelete = action.payload;
            state.admin.favorites.splice(indexToDelete,1);
        }, 

        /** add to cart admin
         * 
         * @param {*} state  : admin cart array
         * @param {*} action : game received
         */
        addToCartAdmin:( state, action) => { 
          const { id, title, rating, image_url, qty } = action.payload;
          const price = (rating * 2.4)
          const existingItem = state.admin.basket.find((item) => item.id === id);
          if (existingItem) {
            existingItem.qty += 1;
          } else {
            state.admin.basket.push({ id, title,rating, price, image_url,  qty:1 });
          }
        }, 
        addToCartAllAdmin:( state, action) => { 
            const item = action.payload;
            state.admin.allBasket.push(item);
        }, 
        incrementQtyAdmin:(state, action)=> {
            const cartId= action.payload;
            const existingItem = state.admin.basket.find((item) => item.id ===cartId);
            if (existingItem) {
              existingItem.qty += 1;
            }
      
          },
          decrementQtyAdmin:(state, action)=> {
            const cartId = action.payload;
            const existingItem = state.admin.basket.find((item) => item.id ===cartId);
            if (existingItem ) {
              existingItem.qty -= 1;
            } 
          },

        //TODO : function not finished 
        //remove from cart admin
        removeFromCartAdmin:( state, action) => { 
            const indexToDelete = action.payload;
            state.admin.favorites.splice(indexToDelete,1);
        }, 
        
//**************************   new user functions   **************************************/
        // new user functions

        /** Add name to user name 
         * 
         * @param {*} state : user name attribut
         * @param {*} action : name to asign to new user name
         */
        addNewUserName:(state, action) => { 
            const nameUser = action.payload;
            state.newUser.newUserName = nameUser;
        },
        
        /** Add password to user password 
         * 
         * @param {*} state : user password attribut
         * @param {*} action : password to asign to new user password
         */
        addNewUserPwd:(state, action) => { 
            const pwdUser = action.payload;
            state.newUser.pwd = pwdUser;
        },
        
        /** Add mail to user mail 
         * 
         * @param {*} state : user mail attribut
         * @param {*} action : mail to asign to new user mail
         */
        addNewUserMail:(state, action) => { 
            const mailUser = action.payload;
            state.newUser.mail = mailUser;
        },
        
        /** change logged boolean of new user
         * 
         * @param {*} state : boolean of user logged
         */
        changeNewUserIsLogged:(state) => { 
            !state.newUser.isConnected;
        },

        /** new user name check
         * 
         * @param {*} state  : new user name
         * @param {*} action : name received
         * @returns if name matches new user name
         */
        checkNewUserName:( state, action) => { return( state.newUser.newUserName == action.payload)},
        
        /** new user password check
         * 
         * @param {*} state  : new user password
         * @param {*} action : password received
         * @returns if password matches new user password
         */
         checkNewUserPwd :( state, action) => { return(state.newUser.pwd == action.payload)}, 

        /** new user mail check
         * 
         * @param {*} state  : new user mail
         * @param {*} action : mail received
         * @returns if mail matches new user mail
         */
        checkNewUserMail:( state, action) => { return(state.newUser.mail == action.payload)}, 

        /** add game to favorites array of new user
         * 
         * @param {*} state  : new user favorites array
         * @param {*} action : game received
         */
        addFavsNewUSer:( state, action) => { 
            const item = action.payload;
            const existingItem = state.newUser.favorites.findIndex(game => game.id == item.id);
            if (existingItem === -1 ) {
                state.newUser.favorites.push(item);
            }
        }, 

        /** remove game to favorites array of new user
         * 
         * @param {*} state  : new user favorites array
         * @param {*} action : game received
         */
        removeFavsNewUSer:( state, action) => { 
            const indexToDelete = action.payload;
            state.newUser.favorites.splice(indexToDelete,1);
        }, 
        
        /** add to cart new user
         * 
         * @param {*} state  : new user cart array
         * @param {*} action : game received
         */
        addToCartNewUSer:( state, action) => { 
            const { title, id, qty } = action.payload;
            const existingItem = state.find((item) => item.id ===id);
            if (existingItem) {
              existingItem.qty += 1;
            } else {
              state.newUser.basket.push({ id, title,  qty:1 });
            }
        }, 

        //TODO : function not finished 
        //remove from cart admin
        removeFromCartNewUser:( state, action) => { 
            const indexToDelete = action.payload;
            state.newUser.favorites.splice(indexToDelete,1);
        }, 
        
//**************************   database functions   **************************************/


        
        addToDatabaseUsers:(state, action) => { 
            const userToAdd = action.payload;
            const existingUser = state.DB_USERS.findIndex(user => user.id == userToAdd.id);
            if (existingUser === -1 ) {
                state.DB_USERS.push(action.payload)
            }
        },

        //TODO : function not finished 
        removeUserFromDatabaseUsers:(state, action) => {
            const { id } = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if (!existingUser) {
                state.DB_USERS.push({id})
            } 
        }
    }
})

export const { checkAdminName, checkAdminPwd, checkAdminMail, addToFavsAdmin, removeFromFavsAdmin, addToCartAdmin, removeFromCartAdmin,addToCartAllAdmin, incrementQtyAdmin, decrementQtyAdmin,
                checkNewUserName, checkNewUserPwd, checkNewUserMail, addFavsNewUSer, removeFavsNewUSer, addToCartNewUSer, removeFromCartNewUser,
                    addToDatabaseUsers} = usersManagementSlice.actions;

export default usersManagementSlice.reducer;
