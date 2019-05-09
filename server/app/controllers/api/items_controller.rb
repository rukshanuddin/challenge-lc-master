module Api
  class ItemsController < ApplicationController
    def index
      @items = Item.all
    end

    def create
      item = Item.create(item_params)
      render json: item
    end

    def destroy
      item = Item.destroy(params[:id])
      render json: item
    end

    def update
      item = Item.find(params[:id])
      item.update_attributes(item_params)
      render json: item
    end

    private

    def item_params
      params.require(:item).permit(:id, :product_id, :check, :sent)
    end


  end
end
