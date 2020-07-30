module Api
  class LinksController < ApplicationController
    def index
    
      @links = Link.all
    end

    def create
      link = Link.create(link_params)
      render json: link
    end

    def destroy
      link = Link.destroy(params[:id])
      render json: link
    end

    def update
      link = Link.find(params[:id])
      link.update_attributes(link_params)
      render json: link
    end

    private

    def link_params
      params.require(:link).permit(:id, :topic_id, :name, :link, :category, :section, :language, :blurb)
    end


  end
end
